
import styles from '../../styles/consentselection.module.css'

const PaymentMethod = (props:
    { 
        isAnonymous: boolean,
        handleChange: React.ChangeEventHandler<HTMLInputElement>,
    }
    ) => {
    return (
        <div className={styles.checkBoxContainer}>
            <div className={styles.checkBox}>
                <input 
                    type="checkbox" 
                    name="anonymous"
                    id="anonymous"
                    checked={props.isAnonymous}
                    onChange={props.handleChange} />
                <label className={styles.label} htmlFor="anonymous">
                    Do not display my name publicly.
                </label>
            </div>
        </div>
    )
}

export default PaymentMethod;