import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ContextPageFooter = () => {
    const { isDark, setIsDark } = useContext(ThemeContext);

    const toggleTheme = () => {
        setIsDark(!isDark);
    }

    return (
        <footer className="footer" style={{
            backgroundColor: isDark ? 'black' : 'white',
            color: isDark ? 'white' : 'black'
        }}>
            <button className="button" onClick={toggleTheme}>다크모드</button>
        </footer>
    );
};

export default ContextPageFooter;