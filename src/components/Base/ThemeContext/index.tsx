import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Assuming `true` represents dark mode and `false` represents light mode
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // You may want to store the theme mode as a string in localStorage since it only supports strings
    const storedTheme = localStorage.getItem("theme");
    const isStoredThemeDark = storedTheme === "dark";
    setIsDarkMode(isStoredThemeDark);
    // Ensure the class is correctly applied to the document element
    document.documentElement.classList.toggle("dark", isStoredThemeDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
    // Ensure the class is correctly applied to the document element
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
