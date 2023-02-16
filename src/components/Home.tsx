'use client'

import styles from '../styles/home.module.css'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();

  const handleMerchantShowcase = () => {
      router.push("/org/methodist-church")
  }
  return (
    <div className={styles.homeContainer}>
      <div style={{padding:"20px"}}>
        <h1 >Hello, Welcome Home</h1>
        <div onClick={handleMerchantShowcase} style={{paddingTop:"50px"}}><button>Click here</button> to see merchant page showcase</div>
      </div>
    </div>
  )
}
