'use client'

import styles from '../../styles/image.module.css'
import { useState, useRef, useEffect } from 'react'

const ImageDisplay = () => {
    const [ imageLoaded, setImageLoaded ] = useState(styles.placeholderPic)

    const image = useRef<HTMLImageElement>(null)

    useEffect(() => {
        if(image.current?.complete){
            setImageLoaded(styles.image)
        }
    })
    return (
        <img  ref={image} src="/images/church.jpg" alt="placeholderImage" className={imageLoaded}/>
    )
}

export default ImageDisplay;