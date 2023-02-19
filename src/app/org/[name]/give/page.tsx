import styles from './page.module.css'
import Pledge from '../../../../components/Pledge'

function Page({ params }:any) {

    return (
        <div className={styles.giveContainer}>
            <div className={styles.givePage}>
                <Pledge name={params.name}/>
            </div>
        </div>
    )
}

export default Page;