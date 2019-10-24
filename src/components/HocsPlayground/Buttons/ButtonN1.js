import {compose} from 'recompose';
import BaseButton from './BaseButton';

import withOnClickSetOuterColor from '../hocs/withOnClickSetOuterColor';
import withMediumSize from '../hocs/withMediumSize';
import withPrimaryColor from '../hocs/withPrimaryColor';


export default compose(
    withMediumSize,
    withPrimaryColor,
    withOnClickSetOuterColor,
)(BaseButton)
