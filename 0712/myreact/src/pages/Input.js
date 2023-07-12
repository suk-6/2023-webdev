import React, { useState } from "react";

export const Input = () => {
    const [text, setText] = useState("");

    const changeHandle = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <input type="text" onChange={changeHandle} value={text} />
            <br />
            <p>{text}</p>
        </div>
    );
};