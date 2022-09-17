import React, {useState} from 'react';
import classes from './Counter.module.scss';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter+1)
    }
    return (
        <div>
            <div className={classes.label}>{counter}</div>
            <button onClick={increment} className={classes.btn}>Клац клац 1</button>
        </div>
    );
};

export default Counter;