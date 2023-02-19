'use client'

import styles from '../styles/actionbar.module.css'
import GoalDisplay from './common/GoalDisplay'
import UserDisplay from './common/UserDisplay'
import RoundedButton from './common/RoundedButton'
import { useRouter } from 'next/navigation'
  
const ActionBar = (props:
    { 
        name: string
    }) => {
    const router = useRouter();

    const handlePledge = () => {
        if(props.name){
            router.push("/org/" + props.name + "/give")
        }
    }

    return (
        <div className={styles.actionbarContainer}>
        <div style={{paddingTop:"25px"}}/>
        <GoalDisplay current="$500" goal="$10,000" quantity="34"/>
        <UserDisplay user="Anonymous" amount="$50"/>
        <UserDisplay user="Anonymous" amount="$100"/>
        <UserDisplay user="Anonymous" amount="$1,000"/>
        <div style={{padding:"0.2rem"}}/>
        <RoundedButton borderRadius="24px" onClick={handlePledge} name="Give Now" width="100%" padding="1rem"  backgroundColor="rgb(161 83 247)"/>
        {/* <RoundedButton name="Give Now" width="100%" padding="1rem"  backgroundColor="rgb(137 42 241)"/> */}
        <div style={{padding:"0.7rem"}}/>
        </div>
    )
}

export default ActionBar