import React, {useState} from 'react';
import './Counter.scss'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter+1)
    }
    return (
        <div>
            <div>{counter}</div>
            <button onClick={increment}>Клац клац 1</button>
        </div>
    );
};

export default Counter;