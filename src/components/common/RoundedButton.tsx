import React from "react"

const Button = (props:
    { 
        name:String,
        padding: string, 
        onClick?: React.MouseEventHandler<HTMLElement>, 
        width: string,
        backgroundColor: string
    }
    ) => {
    return (
        <div style={{padding:props.padding}}>
            <button 
            onClick={props.onClick}
            style={{padding:"15px", fontWeight:"bold", fontSize:"1rem", width:props.width, border:"0px", borderRadius:"24px", color:"white", backgroundColor:props.backgroundColor, cursor:"pointer"}}>
            {props.name}
            </button>
        </div>
    )
}

export default Button;