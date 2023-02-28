import React, { createContext, useState, useMemo, useContext } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {},
});

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const themeValues = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme]
  );
  return (
    <ThemeContext.Provider value={themeValues}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  return useContext(ThemeContext);
};

export { ThemeContextProvider, useThemeContext };
