import React from 'react';

import s from '../styles.module.css';

const withOuterCount = WrappedComponent => props => {
    return (
        <div className={s.withOuterCount}>
            <div>{props.countState.count}</div>
            <WrappedComponent {...props}/>
        </div>
    );
};


export default withOuterCount;
