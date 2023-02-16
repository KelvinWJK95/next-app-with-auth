'use client'

import { useRouter } from 'next/navigation'
import { useCookies } from 'react-cookie'
import { useEffect, useState } from 'react'
import RenderWrapper from './RenderWrapper'

const ProtectedRoute =  ({ children }: any) => {
  const router = useRouter();
  const [ cookies ] = useCookies(['token'])
  const [ render, setRender ] = useState(false)
  
  const isLoggedin = cookies.token
  
  useEffect(()=>{
    if(isLoggedin)
      setRender(true)
    else
      router.push("/login")

  }, [ isLoggedin, setRender, router ])

  return <RenderWrapper render={render}>{children}</RenderWrapper>
}
export default ProtectedRoute