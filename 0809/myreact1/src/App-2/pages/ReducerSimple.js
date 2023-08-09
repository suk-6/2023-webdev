import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
    console.log(state, action)

    switch (action.type) {
        case 'deposit':
            return state + action.payload
        case 'withdraw':
            if (state - action.payload <= 0) return state = 0
            return state - action.payload
        default:
            return state
    }
}

const ReducerSimple = () => {
    const [Amt, setAmt] = useState(0)
    const [amount, dispatch] = useReducer(reducer, 0)

    return (
        <div>
            <p>잔액: {amount}원</p>
            <p>입력액: {Amt}원</p>
            <input type="number" step="1000" value={Amt} onChange={(e) => setAmt(parseInt(e.target.value))} />
            <button onClick={() => dispatch({ type: 'deposit', payload: Amt })}>입금</button>
            <button onClick={() => dispatch({ type: 'withdraw', payload: Amt })}>출금</button>
        </div>
    );
}

export default ReducerSimple;