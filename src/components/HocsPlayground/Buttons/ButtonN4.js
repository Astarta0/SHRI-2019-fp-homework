/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import React from 'react';
import {compose} from 'recompose';
import BaseButton from './BaseButton';
import withCountOfClick from '../hocs/withCountOfClick';
import withOuterCount from '../hocs/withOuterCount';

export default compose(
    withCountOfClick,
    withOuterCount
)(BaseButton)
