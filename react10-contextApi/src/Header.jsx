import { useTheme } from "./contexts/ThemeContext";

export default function Header(){
    const {theme, toggleTheme}= useTheme();
    return(
        <>
        <h1>Demonstration of Context API</h1>
        <button onClick={toggleTheme} style={{backgroundColor : (theme==='dark' ? "#607175" : "#f1fcff"), color : (theme==='dark' ? "#f1fcff" : "#607175") }}>Toggle Theme</button>
        </>
    )
}
