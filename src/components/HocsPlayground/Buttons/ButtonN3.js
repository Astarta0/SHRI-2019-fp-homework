/**
 * Необходимо имплементировать компонент и его логику путем композиции
 * хоков и stateless компонента BaseButton
 */
import React from 'react';
import {compose} from 'recompose';
import BaseButton from './BaseButton';
import withPrimaryColor from '../hocs/withPrimaryColor';
import withCountOfClick from '../hocs/withCountOfClick';

import s from '../styles.module.css';

const ButtonN3 = (props) => {
    return (
        <>
            <BaseButton {...props}>
                <div className={s.innerCount}>Clicks: {props.countState.count}</div>
                {props.children}
            </BaseButton>
        </>
    );
};

export default compose(
    withCountOfClick,
    withPrimaryColor,
)(ButtonN3)
