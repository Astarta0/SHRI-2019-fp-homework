import {withHandlers, compose, withState} from 'recompose';
import { COLORS } from '../../../constants';

export default compose(
    withState('countState', 'setCount', (props) => {
        return {
            count: props.initCount,
            isReverse: props.initCount !== 0
        }
    }),
    withHandlers({
        onClick: (props) => {
            const { countState } = props;

            let commonColor;

            const newCountValue = !countState.isReverse
                ? countState.count + 1
                : countState.count - 1 >= 0
                    ? countState.count - 1
                    : props.initCount;

            if (!countState.isReverse) {
                commonColor = newCountValue % 2 === 0 ? COLORS.gray : COLORS.green;
            } else {
                commonColor = newCountValue === props.initCount ? COLORS.orange : '';
            }

            return () => {
                const {setColorsState, setCount} = props;

                setCount(state => ({
                    ...state,
                    count: newCountValue
                }));

                setColorsState(state => {
                    return {
                        outerColor: commonColor || state.outerColor,
                        innerColor: commonColor || state.innerColor
                    };
                })
            };
        }
    })
);
