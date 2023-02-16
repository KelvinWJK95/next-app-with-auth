
import styles from '../styles/actionbar.module.css'
import GoalDisplay from './common/GoalDisplay'
import UserDisplay from './common/UserDisplay'
import RoundedButton from './common/RoundedButton'


export default function Login(){
    return (
        <div className={styles.actionbarContainer}>
        <div style={{paddingTop:"25px"}}/>
        <GoalDisplay current="$500" goal="$10,000" quantity="34"/>
        <UserDisplay user="Anonymous" amount="$50"/>
        <UserDisplay user="Anonymous" amount="$100"/>
        <UserDisplay user="Anonymous" amount="$1,000"/>
        <div style={{padding:"0.2rem"}}/>
        <RoundedButton name="Give Now" width="100%" padding="6px"  backgroundColor="rgb(161 83 247)"/>
        <RoundedButton name="Pledge" width="100%" padding="6px"  backgroundColor="rgb(137 42 241)"/>
        <div style={{padding:"0.8rem"}}/>
        </div>
    )

}