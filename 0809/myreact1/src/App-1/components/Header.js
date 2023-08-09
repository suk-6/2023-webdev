import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ContextPageHeader = () => {
    const { isDark } = useContext(ThemeContext);
    return (
        <header className="header" style={{
            backgroundColor: isDark ? 'black' : 'white',
            color: isDark ? 'white' : 'black'
        }}>
            <h1>환영합니다.</h1>
        </header>
    );
};

export default ContextPageHeader;