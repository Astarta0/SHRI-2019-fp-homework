/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import React from 'react';
import {compose} from 'recompose';
import BaseButton from './BaseButton';
import withCountOfClick from '../hocs/withCountOfClick';

import s from '../styles.module.css';

const ButtonN4 = (props) => {
    return (
        <div className={s.withOuterCount}>
            <div>{props.countState.count}</div>
            <BaseButton {...props}/>
        </div>
    );
};


export default compose(
    withCountOfClick
)(ButtonN4)
