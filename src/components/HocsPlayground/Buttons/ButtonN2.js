import {compose} from 'recompose';
import BaseButton from './BaseButton';

import withMediumSize from '../hocs/withMediumSize';
import withDefaultColor from '../hocs/withDefaultColor';
import withOnClickSetOuterColor from "../hocs/withOnClickSetOuterColor";

export default compose(
    withOnClickSetOuterColor,
    withMediumSize,
    withDefaultColor,
)(BaseButton)
