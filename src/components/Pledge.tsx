'use client'

import styles from '../styles/pledge.module.css'
import CurrencyInput from './common/CurrencyInput'
import ConsentSelection from './common/ConsentSelection'
import RoundedButton from './common/RoundedButton'
import SelectionButton from './common/SelectionButton'
import CheckoutReview from './common/CheckoutReview'
import PaymentMethod from './common/PaymentMethod'
import GuaranteeMessage from './common/GuaranteeMessage'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Pledge = (props:
    { 
        name: string
    }) => {
    const [ amount, setAmount ] = useState("")
    const [ fee, setFee ] = useState(0)
    const [ total, setTotal ] = useState(0)
    const [ paymentMethod, setPaymentMethod] = useState("ewallet")
    const [ amountError, setAmountError ] = useState(false)
    const [ isMonthly, setIsMonthly ] = useState(false)
    const [ isAnonymous, setIsAnonymous ] = useState(false)
    useEffect(()=>{
        window.scrollTo(0, 0)
        setTotal(Number(amount)+fee)
    }, [ amount, fee ])
    const handleInputNum = (e: React.FormEvent<HTMLInputElement>) => {
        const num = e.currentTarget.value.replace(/^0+|\D/g, "");
        setAmount(num)
        if(num) setAmountError(false) 
        else 
        setAmountError(true)
    }
    const handlePledge = () => {
        if(!amount){
            setAmountError(true)
        }
    }
    const handleOption1 = () => {
        setIsMonthly(false)
    }
    const handleOption2 = () => {
        setIsMonthly(true)
    }
    const handleRadioChange = (e: React.FormEvent<HTMLInputElement>) => {
        setPaymentMethod(e.currentTarget.value)
    }
    const handleCheckBoxChange = (e: React.FormEvent<HTMLInputElement>) => {
        setIsAnonymous(e.currentTarget.checked)
    }
    return (
        <div className={styles.pledgeContainer}>
        <Link href={"/org/" + props.name} className="clickableTextButton buttonBorder" style={{padding:"5px 10px"}}><span style={{fontSize:"18px"}}>&lt;</span> Back to page</Link>
        <div style={{padding:"1rem"}}/>
        <div className={styles.pledgeTitle}>
            <p>You&#39;ll be supporting <b>{props.name}</b>.</p>
        </div>
        <div className={styles.marginBottom}>
            <SelectionButton
                selected={isMonthly}
                handleOption1={handleOption1}
                handleOption2={handleOption2}/>
        </div>
        <div className={styles.marginBottom}>
            <CurrencyInput  
                isMonthly={isMonthly}
                onChange={handleInputNum}
                value={amount.toString()}
                name="amount" 
                error={amountError}
                type="text"/>
        </div>
        <div className={styles.marginBottom}>
            <PaymentMethod
                selectedOption={paymentMethod}
                handleChange={handleRadioChange}/>
        </div>
        <div className={styles.marginBottom}>
            <ConsentSelection
                isAnonymous={isAnonymous}
                handleChange={handleCheckBoxChange}/>
        </div>
        <div className='spacerLine'></div>
        <div className={styles.marginBottom}>
            <CheckoutReview
                amount={amount}
                fee={fee}
                total={total}/>
        </div>
        <RoundedButton onClick={handlePledge} name="Pay" width="100%" padding="0" borderRadius="0.75rem" backgroundColor="rgb(161 83 247)"/>
        <div className='spacerLine'></div>
        <GuaranteeMessage/>
        <div style={{padding:"1rem"}}/>
        </div>
    )
}

export default Pledge