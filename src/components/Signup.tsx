'use client'

import { useState } from 'react'
import styles from '../styles/signup.module.css'
import UnderlineInput, { errorProp } from './common/UnderlineInput'
import RoundedButton from './common/RoundedButton'
import { useRouter } from 'next/navigation'

type props = {
    email: string,
    password: string,
    emailError: errorProp,
    passwordError: errorProp,
    error: string,
    success: string,
    disabled: boolean
}

export default function Signup(){
    const router = useRouter();
    const [ props, setprops ]  = useState<props>({
        email: "",
        password: "",
        emailError: { message: "", hasError: false }, 
        passwordError: { message: "", hasError: false },
        error: "",
        success: "",
        disabled: false
    })
    const validation = () => {
        let errorMsg = {
            emailError: { message:"", hasError: false },
            passwordError: { message: "", hasError: false }
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
    const signup = () => {
        if(!validation()){
            return
        }
        
        setprops({...props, error: "", disabled: true});

        const formData = new FormData()
        formData.append("email", props.email)
        formData.append("password", props.password)
        fetch("http://35.192.17.83:81/register",{
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
                setprops({...props, error: "Sign up Successful!\nYou will be redirected back to login.", disabled: false});
                setTimeout(function () {
                    router.push("/login")
                },1500)
            }
        })
        .catch((error) => {
            setprops({...props, error: "There was an error with the server", disabled: false});
            console.log(error)
        });
        
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            signup()
        }
    }
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        let errorMsg = {
            emailError: { message:"", hasError:false },
            passwordError: { message:"", hasError:false }
        };

        setprops({...props, ...errorMsg, [e.currentTarget.name]:e.currentTarget.value});
    }
    const goBack = () => {
        router.back()
    }
    return (<div className={props.disabled?"disabled":""}><div className={styles.signupContainer}>
        <h1 className={styles.h1}>Sign Up</h1>
        <div style={{color:"red"}}>{props.error}</div>
        <div style={{color:"green", whiteSpace: "pre-line"}}>{props.success}</div>
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
            name="Register" 
            backgroundColor="#2AB2DE"
            width="80%"
            padding="10px"
            onClick={signup}/>
        <span onClick={goBack} className="clickableTextButton">Back</span>
        <div style={{padding:"2rem"}}/>
    </div></div>)

}