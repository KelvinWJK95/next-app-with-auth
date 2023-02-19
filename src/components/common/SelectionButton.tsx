import styles from '../../styles/selectionbutton.module.css'
import { useEffect, useState } from 'react'

const SelectionButton = (props:
    { 
        handleOption1: React.MouseEventHandler<HTMLElement>, 
        handleOption2: React.MouseEventHandler<HTMLElement>, 
        selected: boolean
    }) => {
    const [ optionOneCss, setOptionOneCss ] = useState(styles.selectionButton)
    const [ optionTwoCss, setOptionTwoCss ] = useState(styles.unselectedButton)
    useEffect(()=>{
        if(props.selected){
            setOptionOneCss(styles.unselectedButton)
            setOptionTwoCss(styles.selectionButton)
        }else{
            setOptionOneCss(styles.selectionButton)
            setOptionTwoCss(styles.unselectedButton)
        }
    }, [ props.selected ])
    return (
        <div className={styles.selectionButtonContainer}>
            <div onClick={props.handleOption1} className={styles.once}>
                <div className={optionOneCss}>Once</div>
            </div>
            <div onClick={props.handleOption2} className={styles.monthly}>
                <div className={optionTwoCss}>Monthly</div>
            </div>
        </div>
    )
}

export default SelectionButton;