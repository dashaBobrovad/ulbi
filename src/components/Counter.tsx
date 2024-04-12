import React, { useState } from 'react'
import cx from "./Counter.module.scss";

const Counter = () => {
    const [count, setCount] = useState(10);

    const increment = () => {
        setCount(() => count + 1)
    }

    const decrement = () => {
        setCount(() => count - 1)
    }

    return (
        <div className={cx.test}>
            <button onClick={increment}>+</button>
            <div>{count}</div>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter
