import { useRef } from 'react'
import styles from '../../styles/currencyinput.module.css'
import { useEffect, useState } from 'react'

const CurrencyInput = (props:
    { 
        name: string, 
        value: string,
        type?: string, 
        isMonthly: boolean,
        error: boolean,
        placeholder?: string,
        onChange: React.ChangeEventHandler<HTMLInputElement>
    }
    ) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [ borderClass, setBorderClass ] = useState(styles.normalBorder)
    const handleFocus = () => {
        if(inputRef.current){
            inputRef.current.focus()
        }
    }
    useEffect(()=>{
        if(props.error){
            setBorderClass(styles.errorBorder)
        }else{
            setBorderClass(styles.normalBorder)
        }
    }, [ props.error ])
    return (
        <div>
            <div className={borderClass} onClick={handleFocus}>
                <div className={styles.currencyContainer}>
                <div className={styles.currencySign}><div>$</div></div>
                <input
                required 
                ref={inputRef}
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                inputMode="numeric"
                maxLength={5}
                autoComplete="off"
                onChange={props.onChange}
                value={props.value}
                className={styles.currencyInput}
                />
                <span>.00</span>
                {(props.isMonthly?<div><span className={styles.currencyMonthly}>/month</span></div>:<></>)}
                
                </div>
            </div>
            {(props.error)?<div className={styles.errorMessage}>Please enter amount</div>:<></>}
        </div>
    )
}

export default CurrencyInput;