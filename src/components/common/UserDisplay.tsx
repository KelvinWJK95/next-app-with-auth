import Image from 'next/image'

const UserDisplay = (props:
    { 
        user: string,
        amount: string, 
    }
    ) => {
    return (
        <div style={{display:"flex"}}>
        <div style={{textAlign:"left", padding:"4px 10px", display:"flex"}}>
            <div style={{padding:"0.5rem"}}/>
            <div style={{padding:"0px 10px"}}>
                <Image  src="/images/icons8-user-32.png" width={32} height={32} alt="userLogo"/>
            </div>
            <div style={{fontSize:"12px"}}>
                <div>{props.user}</div>
                <div style={{fontFamily:"sans-serif", fontWeight:"900"}}>{props.amount}</div>
            </div>
        </div>
        </div>
    )
}

export default UserDisplay;