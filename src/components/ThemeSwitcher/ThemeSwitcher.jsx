import { useTheme } from '../../context/ThemeContext';

function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>Otherworld?</button>
        </div>
    );
}

export default ThemeSwitcher;