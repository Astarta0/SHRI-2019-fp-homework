import {withHandlers, compose, withState} from 'recompose';
import { getRandomColor } from '../../../helpers/utils';


export default compose(
    withState('angle', 'setAngle', 0),
    withHandlers({
        onClick: ({ setAngle, setColorsState, angle }) => () => {
            const isNextFullCircle = angle === -330;
            const nextAngle = Math.abs(angle / 360) === 1 ? -30 : angle-30;
            setAngle(() => nextAngle);
            setColorsState(state => isNextFullCircle ? {
                innerColor: getRandomColor(),
                outerColor: getRandomColor(),
            } : state);

        }
    })
);
