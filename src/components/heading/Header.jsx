import React from 'react'
import './header.css'

const Header = () => {
  return (
    <>
        <section className="header">
            <div className="web-name">
                <div className="logo">
                    <h2>2</h2>
                    <h1>bio lab</h1>
                </div>
                <h3>biophysics and bioimaging @ UI</h3>
            </div>
            <div className="auth">
                <i class="fa-solid fa-circle-user"></i>
                <h4>Log In</h4>
            </div>
        </section>
    </>
  )
}

export default Header