import React from "react";

const Student = ({ id, name, isHere, dispatch }) => {
    return (
        <div>
            <span style={{
                cursor: 'pointer',
                textDecoration: isHere ? 'line-through' : 'none',
                color: isHere ? 'gray' : 'black',
            }} onClick={() => {
                dispatch({ type: 'toggleIsHere', payload: { id } })
            }}>{name} </span>

            <button onClick={() => {
                dispatch({ type: 'toggleIsHere', payload: { id } })
            }}>출석</button>

            <button onClick={() => {
                dispatch({ type: 'removeStudent', payload: { id } })
            }}>삭제</button>
        </div>
    );
}

export default Student;