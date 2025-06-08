import React from 'react'
import './header.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Header = () => {
  return (
    <>
        <section className="header">
            <div className="web-name">
                <div className="logo">
                    <h2><Link to="/" className='logo-num'>2</Link></h2>
                    <h1><Link to="/" className='logo-name'>bio lab</Link></h1>
                </div>
                <h3><Link to="/" className='title'>biophysics and bioimaging @ UI</Link></h3>
            </div>
            <div className="auth">
                <i class="fa-solid fa-circle-user"></i>
                <h4>Log In</h4>
            </div>
        </section>
            <div className="log-in">
                <i class="fa-solid fa-xmark"></i>
                <h1>Log In</h1>
                <p>New to this site? <span>Sign Up</span></p>
                <form>
                    <div className="google">
                        <i class="fa-brands fa-google"></i>
                        <input type="text" id="name" name="name" placeholder="Log in with Google" />
                    </div>
                    <div className="facebook">
                        <i class="fa-brands fa-facebook"></i>
                        <input type="text" id="name" name="name" placeholder="Log in with Facebook" />
                    </div>
                    <div className='divider'>or</div>
                    <input type="text" id="name" name="name" placeholder="Log in with Email" />
                </form>
            </div>
    </>
  )
}

export default Header