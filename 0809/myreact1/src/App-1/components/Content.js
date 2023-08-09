import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ContextPageContent = () => {
    const { isDark } = useContext(ThemeContext);
    return (
        <div className="content" style={{
            backgroundColor: isDark ? 'black' : 'white',
            color: isDark ? 'white' : 'black'
        }}>
            <p>이곳은 컨텐츠입니다.</p>
        </div>
    );
};

export default ContextPageContent;