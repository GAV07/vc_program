import React from 'react'

const Header = () => {
    return (
        <section className="header">
               <nav className="header__nav">
                   <a href=".mission">Mission</a>
                   <a href=".program">Program</a>
                   <a href=".faq">FAQ</a>
               </nav>
               <div className="header__bk"></div>
        </section>
    )
}

export default Header