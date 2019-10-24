/**
 * Необходимо имплементировать компонент и его логику путем композиции
 * хоков и stateless компонента BaseButton
 */
import React from 'react';
import {compose} from 'recompose';
import BaseButton from './BaseButton';
import withPrimaryColor from '../hocs/withPrimaryColor';
import withCountOfClick from '../hocs/withCountOfClick';
import withInnerCount from '../hocs/withInnerCount';

export default compose(
    withCountOfClick,
    withPrimaryColor,
    withInnerCount
)(BaseButton)
