import ContextPage from './pages/ContextPage';
import { useState } from 'react';
import { ThemeContext } from './context/ThemeContext';

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <ContextPage />
    </ThemeContext.Provider>
  );
}

export default App;
