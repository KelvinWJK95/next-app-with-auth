
import styles from '../../styles/checkoutreview.module.css'

const CheckoutReview = (props:
    { 
        amount: string,
        fee: number,
        total: number
    }
    ) => {
    return (
        <div>
            <dl className={styles.review}>
                <dt>You are giving</dt>
                <dd>${props.amount?Number(props.amount).toLocaleString('en'):0}.00</dd>
                <dt>Fees</dt>
                <dd>${props.fee?props.fee.toLocaleString('en'):0}.00</dd>
                <div className='spacerLineLite'></div>
                <dt className={styles.summaryLeft}>Total today</dt>
                <dd className={styles.summaryRight}>${props.total?props.total.toLocaleString('en'):0}.00</dd>
            </dl>
        </div>
    )
}

export default CheckoutReview;