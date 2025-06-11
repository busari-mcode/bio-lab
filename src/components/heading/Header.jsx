import React, { useState } from 'react';
import './header.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import google from '../../test_images/google_icon.png'
import facebook from '../../test_images/facebook_icon.png'

const Header = () => {
    const [isLoggingIn, setIsLoggingIn] = useState(false);
  return (
    <> 
        {isLoggingIn ? null : (
        <section className="header">
            <div className="web-name">
                <div className="logo">
                    <h2><Link to="/" className='logo-num'>2</Link></h2>
                    <h1><Link to="/" className='logo-name'>bio lab</Link></h1>
                </div>
                <h3><Link to="/" className='title'>biophysics and bioimaging @ UI</Link></h3>
            </div>
            <div className="auth" onClick={() => setIsLoggingIn(true)}>
                <i class="fa-solid fa-circle-user"></i>
                <h4>Log In</h4>
            </div>
        </section>
        ) }

        {isLoggingIn ? (
            <div className="log-in">
                <i class="fa-solid fa-xmark" onClick={() => setIsLoggingIn(false)}></i>
                <h1>Log In</h1>
                <p>New to this site? <span>Sign Up</span></p>
                <form>
                    <div className="google">
                        <img src={google} alt="" />
                        <input className='google-textbox' type="text" id="name" name="name" placeholder="Log in with Google" />
                    </div>
                    <div className="facebook">
                        <img src={facebook} alt="" />
                        <input className='facebook-textbox' type="text" id="name" name="name" placeholder="Log in with Facebook" />
                    </div>
                    <div className='divider'>or</div>
                    <input className='email-textbox' type="text" id="name" name="name" placeholder="Log in with Email" />
                </form>
            </div>
        ) : null}
    </>
  )
}

export default Header