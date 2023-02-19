import React from "react"
import styles from '../../styles/button.module.css'

const Button = (props:
    { 
        name:String,
        padding: string, 
        onClick?: React.MouseEventHandler<HTMLElement>, 
        width: string,
        backgroundColor: string
        borderRadius: string
    }
    ) => {
    return (
        <div style={{padding:props.padding}}>
            <button 
            onClick={props.onClick}
            className={styles.button}
            style={{padding:"15px", minWidth:"160px", fontWeight:"bold", fontSize:"1rem", width:props.width, border:"0px", borderRadius:props.borderRadius, color:"white", backgroundColor:props.backgroundColor, cursor:"pointer"}}>
            {props.name}
            </button>
        </div>
    )
}

export default Button;