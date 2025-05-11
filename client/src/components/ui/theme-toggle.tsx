import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ui/theme-provider";

export function ThemeToggle() {
  const { setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Check if we're in a browser environment
  const isBrowser = typeof window !== 'undefined';
  
  useEffect(() => {
    // Get the current theme from localStorage or default to dark
    const currentTheme = isBrowser ? localStorage.getItem('vite-ui-theme') || 'dark' : 'dark';
    setIsDarkMode(currentTheme === 'dark');
    
    // Apply the theme to the DOM
    if (isBrowser) {
      const root = document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(currentTheme);
    }
  }, [isBrowser]);
  
  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setTheme(newTheme);
    setIsDarkMode(!isDarkMode);
    
    // Also manually toggle the class on root element for immediate visual feedback
    if (isBrowser) {
      const root = document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(newTheme);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full w-9 h-9 flex items-center justify-center bg-primary/20 backdrop-blur-md border border-primary/30 hover:bg-primary/30 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-primary" />
      ) : (
        <Moon className="h-5 w-5 text-primary" />
      )}
    </button>
  );
}