import {withHandlers} from 'recompose';


export default
    withHandlers({
        onClick: ({ setColorsState, outerColor }) => () => {
            setColorsState(state => ({
                ...state,
                outerColor: outerColor
            }));
        },
    });
