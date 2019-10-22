/*
 * Основная задача — написать самому, или найти в FP библиотеках функции anyPass/allPass
 * Эти функции/их аналоги есть и в ramda и в lodash
 *
 * allPass — принимает массив функций-предикатов, и возвращает функцию-предикат, которая
 * вернет true для заданного списка аргументов, если каждый из предоставленных предикатов
 * удовлетворяет этим аргументам (возвращает true)
 *
 * anyPass — то же самое, только удовлетворять значению может единственная функция-предикат из массива.
 *
 * Если функции будут написаны руками (без использования библиотеки) это не является ошибкой, например:
 *
 * const greaterThenOne = x => x > 1;
 * const length = x => x.length;
 * const lengthGreaterThenOne = compose(greaterThenOne, length);
 * Это — ок.
 *
 * Вот такая запись не очень хорошая, все таки потренируйтесь составлять композиции:
 * const lengthGreaterThenOne = x => x.length > 1;
 */

import {replace, length, compose, test, allPass, anyPass, complement} from 'ramda';

const replaceNotNumbers = replace(/[^0-9]/g, '');
const replaceNumbers = replace(/[0-9]/g, '');
const getNumbersCount = compose(length, replaceNotNumbers);

const getLengthValidatePredicate = fn => compose(fn, length);
const getNumbersCountValidatePredicate = fn => compose(fn, getNumbersCount);

/**
 * Функции для проверки выполнения условий с количеством цифр в строке
 */
const isNumbersCountMore = count => length => length > count;
const isNumbersCountLess = count => length => length < count;

/**
 * Функции для проверки выполнения условий с длиной строки
 */

const isLengthLess = count => length => length < count;
const isLengthMore = count => length => length > count;

/**
 * Функции для проверки наличия конкретного символа в строке
 */

const isContains = (regexp, replaceFn) => compose(test(regexp), replaceFn);
const isNotContains = (regexp, replaceFn) => complement(isContains(regexp, replaceFn));

// 1. Длина < 5 и кол-во цифр > 2 шт.
export const validateFieldN1 = (value) => {
    const isNumCountValid = getNumbersCountValidatePredicate(isNumbersCountMore(2));
    const isLengthValid = getLengthValidatePredicate(isLengthLess(5));
    return allPass([isLengthValid, isNumCountValid])(value);
};

// 2. Длина < 5 и кол-во цифр < 2 шт.
export const validateFieldN2 = (value) => {
    const isNumCountValid = getNumbersCountValidatePredicate(isNumbersCountLess(2));
    const isLengthValid = getLengthValidatePredicate(isLengthLess(5));
    return allPass([isLengthValid, isNumCountValid])(value);
};

// 3. Длина > 5 или кол-во цифр > 1 шт.
export const validateFieldN3 = (value) => {
    const isNumCountValid = getNumbersCountValidatePredicate(isNumbersCountMore(1));
    const isLengthValid = getLengthValidatePredicate(isLengthMore(5));
    return anyPass([isLengthValid, isNumCountValid])(value);
};

// 4. Длина < 10 и кол-во цифр > 2 шт. и одна из цифр равна "4"
export const validateFieldN4 = (value) => {
    const isLengthValid = getLengthValidatePredicate(isLengthLess(10));
    const isNumCountValid = getNumbersCountValidatePredicate(isNumbersCountMore(2));
    return allPass([isLengthValid, isNumCountValid, isContains(/4/, replaceNotNumbers)])(value);
};

// 5. Длина < 10 и кол-во цифр > 1 шт. и ни одна из цифр не равна "4"
export const validateFieldN5 = (value) => {
    const isLengthValid = getLengthValidatePredicate(isLengthLess(10));
    const isNumCountValid = getNumbersCountValidatePredicate(isNumbersCountMore(1));
    return allPass([isLengthValid, isNumCountValid, isNotContains(/4/g, replaceNotNumbers)])(value);
};

// 6. Длина > 5, или одна из цифр равна "7"
export const validateFieldN6 = (value) => {
    const isLengthValid = getLengthValidatePredicate(isLengthMore(5));
    const contains7 = isContains(/7/, replaceNotNumbers);
    return anyPass([isLengthValid, contains7])(value);
};

// 7. Длина > 8 и кол-во цифр > 3 шт. и только англ
export const validateFieldN7 = (value) => {
    const isLengthValid = getLengthValidatePredicate(isLengthMore(8));
    const isNumCountValid = getNumbersCountValidatePredicate(isNumbersCountMore(3));
    const onlyEng = isNotContains(/[^A-Za-z]/g, replaceNumbers);

    return allPass([isLengthValid, isNumCountValid, onlyEng])(value);
};

// 8. Кол-во цифр < 5 шт. или только англ или одна из цифр равна "7"
export const validateFieldN8 = (value) => {
    const isNumCountValid = getNumbersCountValidatePredicate(isNumbersCountLess(5));
    const onlyEng = isNotContains(/[^A-Za-z0-9]/g, replaceNumbers);
    const contains7 = isContains(/7/, replaceNotNumbers);

    return anyPass([isNumCountValid, onlyEng, contains7])(value);
};

// 9. Длина < 8, кол-во цифр > 4 шт. только англ
export const validateFieldN9 = (value) => {
    const isLengthValid = getLengthValidatePredicate(isLengthLess(8));
    const isNumCountValid = getNumbersCountValidatePredicate(isNumbersCountMore(4));
    const onlyEng = isNotContains(/[^A-Za-z]/g, replaceNumbers);

    return allPass([isLengthValid, isNumCountValid, onlyEng])(value);
};

// 10. Длина < 4 или кол-во цифр > 2 шт. или только англ
export const validateFieldN10 = (value) => {
    const isLengthValid = getLengthValidatePredicate(isLengthLess(4));
    const isNumCountValid = getNumbersCountValidatePredicate(isNumbersCountMore(2));
    const onlyEng = isNotContains(/[^A-Za-z0-9]/g, replaceNumbers);

    return anyPass([isNumCountValid, onlyEng, isLengthValid])(value);
};
