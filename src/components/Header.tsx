'use client'

import styles from '../styles/header.module.css'
import { useRouter, usePathname } from 'next/navigation'
import { useCookies } from 'react-cookie'
import { useEffect, useState } from 'react'
import RenderWrapper from './RenderWrapper'
import AuthButton from './AuthButton'

function Header(){
    const pathname = usePathname();
    const [ cookies, setCookie, removeCookie ] = useCookies(['token'])
    const [ render, setRender ] = useState(false)
    const [ islogin, setIslogin ] = useState(true)
    const [ isLoggingout, setIsLoggingout ] = useState(false)
    const [ authenticated, setAuthenticated ] = useState(false)
    const router = useRouter();

    const isLoggedin = cookies.token

    useEffect(()=>{
        if(!isLoggingout){
            setAuthenticated(isLoggedin?true:false)
        }
        setIslogin(pathname !== '/login'?false:true)
        setRender(true)

        if(pathname === '/login') setIsLoggingout(false)
    })
    const handleLogout = () => {
        router.push("/login")
        removeCookie("token", { path: "/" })
        setIsLoggingout(true)
    }
    return (
        <div className={styles.logoutSection}>
          <RenderWrapper render={render}><AuthButton handleLogout={handleLogout} islogin={islogin} authenticated={authenticated}/></RenderWrapper>
        </div>
    )

}

export default Header