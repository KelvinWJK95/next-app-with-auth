import Image from 'next/image'

const GuaranteeMessage = () => {
    return (
        <div style={{display:"flex"}}>
            <Image  src="/images/shield-check.svg" width={32} height={32} alt="userLogo" style={{margin:"0.75rem"}}/>
            <div style={{padding:"0.5rem 0"}}>
                <b>We Guarantee</b>
                <p>Your giving will be fully refunded if there is any fraud occurs.</p>
            </div>
        </div>
    )
}

export default GuaranteeMessage;