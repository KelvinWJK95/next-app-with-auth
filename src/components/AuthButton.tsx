import { useRouter } from 'next/navigation'

 const AuthButton = (props:
  { 
    islogin: boolean,
    authenticated: boolean,
    handleLogout: React.MouseEventHandler<HTMLSpanElement>, 
  }) => {
    const router = useRouter();
  
    const handleLogin = () => {
      router.push("/login")
    }
    if(props.islogin){
      return <></>
    }else{
      return (props.authenticated?<span onClick={props.handleLogout} className="clickableTextButton">Logout</span>:<span onClick={handleLogin} className="clickableTextButton">Login</span>)
    }
}

export default AuthButton