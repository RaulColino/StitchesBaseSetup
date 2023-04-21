//Theme switching utilities with suppport for caching in local storage

import { createContext, useState, useEffect } from "react";
import { darkTheme, theme as lightTheme} from "../../stitches.config";

const ThemeChangerContext = createContext({
  appTheme: lightTheme.className,
  setAppTheme: (appTheme: string) => {},
  toggleAppTheme: () => {},
});

const getTheme = () => {
  const currentTheme = localStorage.getItem("theme");
  if (!currentTheme) {
    // Default theme is taken as light-theme
    localStorage.setItem("theme", lightTheme.className);
    return lightTheme.className;
  } else {
    return currentTheme;
  }
};

const ThemeChangerProvider = ({ children }: any) => {
  const [appTheme, setAppTheme] = useState(getTheme);

  function toggleAppTheme() {
    console.log("light = " + lightTheme.className);
    console.log("dark = " + darkTheme.className);
    if (appTheme === darkTheme.className) {
      setAppTheme(lightTheme.className);
    } else {
      setAppTheme(darkTheme.className);
    }
  }

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem("theme", appTheme);
    };

    refreshTheme();
  }, [appTheme]);

  return (
    <ThemeChangerContext.Provider
      value={{
        appTheme,
        setAppTheme,
        toggleAppTheme,
      }}
    >
      {children}
    </ThemeChangerContext.Provider>
  );
};

export { ThemeChangerContext, ThemeChangerProvider };
