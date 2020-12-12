import React, { useState, useEffect } from 'react'
import logo from '../images/logo.png'

const Footer = () => {

    const [isDesktop, setIsDesktop] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (window.innerWidth > 769) {
          setIsDesktop(true);
          setIsMobile(false);
        } else {
          setIsMobile(true);
          setIsDesktop(false);
        }
          
    }, [])

    const Image = () => {
        if (isDesktop) {
            return <a href="https://centerforblackinnovation.org"><img src={logo} alt="Logo"/></a>
        } else return null
    }

    return (
        <section className="footer">
            <div className="footer__copy">
                <Image />
                <p>Center for Black Innovation</p>
                <p>937 NW 3rd Ave.</p>
                <p>Miami, FL 33136</p>
                <p>© Center for Black Innovation</p>
            </div>
        </section>
    )
}

export default Footer