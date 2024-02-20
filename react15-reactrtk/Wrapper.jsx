import React from 'react'

const stylebox = {
    border : "2px solid #61dafb",
    padding : "2em"
}
function Wrapper({children}) {
  return (
    <div style={stylebox}>{children}</div>
  )
}

export default Wrapper