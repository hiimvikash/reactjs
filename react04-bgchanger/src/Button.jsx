export default function Btn({color, setColor}){

    const btnstyle = {
        fontSize : "18px",
        padding : "0.5em",
        width : "5em",
        borderRadius : "10px",
        backgroundColor : color,
        color: "white",
        border : "none"
    }
    function changeColor(){
      setColor(color);
    }
    return(
        <button style={btnstyle} onClick={changeColor}>{color}</button>
    )
  }