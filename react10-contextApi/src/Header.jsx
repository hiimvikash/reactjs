import { useTheme } from "./contexts/ThemeContext";

export default function Header(){
    const {theme, toggleTheme}= useTheme();
    return(
        <>
        <h1>Demonstration of Context API</h1>
        <button onClick={toggleTheme} style={{backgroundColor : (theme==='dark' ? "#0e414d" : "#f1fcff"), color : (theme==='dark' ? "#f1fcff" : "#0e414d") }}>Toggle Theme</button>
        </>
    )
}
