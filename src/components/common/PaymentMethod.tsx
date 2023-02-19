
import styles from '../../styles/paymentmethod.module.css'

const PaymentMethod = (props:
    { 
        selectedOption: string,
        handleChange: React.ChangeEventHandler<HTMLInputElement>,
    }
    ) => {
    return (
        <div>
            <div className={styles.header}>Payment method</div>
            <fieldset className={styles.paymentContainer}>
                <div className={styles.radioButtonContainer}>
                    <div className={styles.radioButton}>
                        <input 
                            type="radio" 
                            name="paymentMethod"
                            id="ewallet" 
                            value="ewallet" 
                            checked={props.selectedOption === "ewallet"}
                            onChange={props.handleChange}/>
                        <label className={styles.label} htmlFor="ewallet">
                            <div>eWallet</div>
                        </label>
                    </div>
                </div>
                <div className={styles.radioButtonContainer}>
                    <div className={styles.radioButton}>
                        <input 
                            type="radio" 
                            name="paymentMethod" 
                            id="card" 
                            value="card" 
                            checked={props.selectedOption === "card"}
                            onChange={props.handleChange}/>
                        <label className={styles.label}  htmlFor="card">
                            <div>Credit or Debit</div>
                        </label>
                    </div>
                </div>
            </fieldset>
        </div>
    )
}

export default PaymentMethod;