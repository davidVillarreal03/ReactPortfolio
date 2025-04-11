import { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    // load theme from local storage (or default to 'light')
    const storedTheme = localStorage.getItem('theme') || 'light';
    const [theme, setTheme] = useState(storedTheme);

    // Function to toggle theme and save it to local storage
     const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme); // Save new theme to local storage
            console.log(localStorage.getItem('theme'));
            console.log(newTheme);
            return newTheme;
        });
     };

     // Apply theme styles to <body> when theme changes
     useEffect(() => {
        document.body.style.backgroundColor = theme === 'light' ? '#b0b1b4' : '#4a2e2e';
        document.body.style.transition = 'background-color 0.5s ease';
        let bgColor = document.body.style.backgroundColor;
        console.log(bgColor);
     }, [theme]); // runs every time theme changes

     return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
     );
     }

// Custom hook to access theme and toggleTheme
export function useTheme() {
    return useContext(ThemeContext);
} 


// Explanation for const toggleTheme
// setTheme((prevTheme) => {...})
// - setTheme is a state updater function from useState.
// - Instead of directly passing a new value, we use a function inside setTheme.
// - The function takes prevTheme (previous theme state) as a parameter.
// - React batches state updates, and the previous state might not be updated instantly.
// - Using prevTheme ensures we always work with the latest theme value, avoiding any stale state issues.
// *Ensures we work with the latest theme state.*

// Explanation for const new Theme = prevTheme === 'ight' ? 'dark' : 'light';
// - Ternary operator ( condition ? ifTrue : ifFalse) checks: 
// - If prevTheme is 'light', set newTheme to 'dark'.
// - If prevTheme is 'dark', set newTheme to 'light'.
// *Toggles the theme.*

// Explanation for localStorage.setItem('theme', newTheme);
// - This saves the new theme in localStorage so the app can remember it after a page refresh
// - It takes two arguments: 'theme' (key) and newTheme (value)
// - localStorage.setItem() is a method to store data in the browser's local storage.
// - localStorage.setItem('theme', 'dark'); saves dark under theme key
// - console.log(localStorage.getItem('theme'));
// *Saves the theme for persistence.*

// Explanation for what newTheme will return
// - The function inside setTheme must return the new state value.
// - This updates the React state with the new theme.
// - Without return newTheme, React would not know what to update.
// *Updates the React state.*