import { useTheme } from "./contexts/ThemeContext";

export default function Content(){
    const{theme} = useTheme();

    return (
        <>
        <p style={{backgroundColor : (theme === 'dark' ? "#0e414d" : "#f1fcff"), color : (theme === 'dark' ? "#f1fcff" : "#0e414d"), transition : "all 0.3s ease-out", padding:"1.5em", borderRadius:"0.5em" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusantium error, explicabo aut minima corrupti. Blanditiis dolor sit placeat iste nesciunt. Fugiat autem, corrupti culpa dolorem, accusamus reprehenderit id inventore aliquid qui officia commodi quis. Error laudantium ut aliquid debitis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa nostrum perferendis odio iure. Eligendi natus aspernatur eaque nam suscipit nulla enim sunt, commodi voluptates, rem eius, fuga velit ratione quaerat?
        </p>
        </>
    )
}