import { useTheme } from "./contexts/ThemeContext";

export default function Header(){
    const {theme, toggleTheme}= useTheme();
    return(
        <>
        <h1>Demonstration of Context API</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        </>
    )
}
