import React from 'react';

import s from '../styles.module.css';

const withInnerCount = WrappedComponent => props => {
    return (
        <WrappedComponent {...props}>
            <div className={s.innerCount}>Clicks: {props.countState.count}</div>
            {props.children}
        </WrappedComponent>
    );
};


export default withInnerCount;
