import React from "react";

const Student = ({ id, name, dispatch }) => {
    return (
        <div>
            <span>{name} </span>
            <button onClick={() => {
                dispatch({ type: 'removeStudent', payload: { id } })
            }}>삭제</button>
        </div>
    );
}

export default Student;