import React from "react";

export const Counter = () => {
    const [num, setNum] = React.useState(0);

    const increase = () => {
        setNum(num + 1);
    };

    const decrease = () => {
        setNum(num - 1);
    };

    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    )
};