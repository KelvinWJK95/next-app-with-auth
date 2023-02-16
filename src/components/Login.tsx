'use client'

import { useState } from 'react'
import styles from '../styles/login.module.css'
import UnderlineInput , { errorProp } from './common/UnderlineInput'
import RoundedButton from './common/RoundedButton'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type props = {
    email: string,
    password: string,
    emailError: errorProp,
    passwordError: errorProp,
    error: string,
    disabled: boolean
}

export default function Login(){
    const router = useRouter();
    const [ cookie, setCookie ] = useCookies(['token']);
    const [ props, setprops ]  = useState<props>({
        email:"",
        password:"",
        emailError:{message:"", hasError:false}, 
        passwordError:{message:"", hasError:false},
        error:"",
        disabled: false
    })
    const validation = () => {
        let errorMsg = {
            emailError: { message:"", hasError:false },
            passwordError: { message:"", hasError:false }
        };
        let noError = true;

        const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
        if(!props.email){
            errorMsg.emailError = { message:"Please enter your email", hasError:true }
            noError = false;
        }else if(regex.test(props.email) === false){
            errorMsg.emailError = { message:"Please enter a valid email", hasError:true }
            noError = false;
        }

        if(!props.password){
            errorMsg.passwordError = { message:"Please enter your password", hasError:true }
            noError = false;
        }

        setprops({...props, ...errorMsg});

        return noError
    }
    const login = () => {
        if(!validation()){
            return
        }
        
        setprops({...props, error: "", disabled: true});

        const formData = new FormData()
        formData.append("email", props.email)
        formData.append("password", props.password)
        fetch("http://35.192.17.83:81/login",{
            method: 'POST',
            body: formData
        })
        .then((response) => response.json())
        .then((data) => {
            if(data.error){
                let errorMsg = ""
                if(data.error.includes("connection error")){
                    errorMsg = "There was an error with the server"
                }
                else{
                    errorMsg = data.error
                }
                
                setprops({...props, error: errorMsg, disabled: false});
            }
            else{
                if(data.token){
                    setCookie('token', data.token, { path: '/' });
                    setTimeout(function () {
                        router.push("/home")
                    },1000)
                }else{
                    setprops({...props, error: "Token not found", disabled: false});
                }
            }
        })
        .catch((error) => {
            setprops({...props, error: "There was an error with the server", disabled: false});
            console.log(error)
        });
        
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            login()
        }
    }
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        let errorMsg = {
            emailError: { message:"", hasError:false },
            passwordError: { message:"", hasError:false }
        };

        setprops({...props, ...errorMsg, [e.currentTarget.name]:e.currentTarget.value});
    }
    return (<div className={props.disabled?"disabled":""}><div className={styles.loginContainer}>
        <h1 className={styles.h1}>Sign In</h1>
        <div style={{color:"red"}}>{props.error}</div>
        <UnderlineInput 
            name="email" 
            placeholder="Email Address"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            error={{message: props.emailError.message, hasError: props.emailError.hasError}}/>
        <UnderlineInput 
            name="password" 
            type="Password"
            placeholder="Password"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            error={{message: props.passwordError.message, hasError: props.passwordError.hasError}}/>
        <RoundedButton 
            name="Login" 
            backgroundColor="#2ADE9A"
            width="80%"
            padding="10px"
            onClick={login}/>
        <Link href="/signup" className="clickableTextButton">Sign Up</Link>
        <div style={{padding:"2rem"}}/>
    </div></div>)

}