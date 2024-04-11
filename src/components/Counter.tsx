import React, { useState } from 'react'
import "./Counter.scss";

const Counter = () => {
    const [count, setCount] = useState(10);

    const increment = () => {
        setCount(() => count + 1)
    }

    const decrement = () => {
        setCount(() => count - 1)
    }

    return (
        <div>
            <button onClick={increment}>+</button>
            <div>{count}</div>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter
