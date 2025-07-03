import React, { useState } from 'react';
import './header.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import google from '../../test_images/google_icon.png'
import facebook from '../../test_images/facebook_icon.png'

const Header = () => {
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

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

            {/************ mobile menu ***********/}            
            <div className="menu-icon" onClick={toggleMenu}>
                <i class="fa-solid fa-bars"></i>
            </div>

            {menuOpen && (
            <div className="mobile-menu">
                <div className="mobile-auth" onClick={() => setIsLoggingIn(true)}>
                    <i class="fa-solid fa-circle-user"></i>
                    <h4>Log In</h4>
                </div>
                <ul>
                    <li onClick={toggleMenu}><Link to="/" className='page'>home</Link></li>
                    <li>
                        <Link to="/people" className='people'onClick={toggleMenu}>people</Link>
                        <i class="fa-solid fa-xmark" onClick={toggleMenu}></i>
                    </li>
                    <li onClick={toggleMenu}><Link to="/publications" className='publications'>publications</Link></li>
                    <li onClick={toggleMenu}><Link to="/labpics" className='labpics'>lab pictures</Link></li>
                    <li onClick={toggleMenu}><Link to="/join" className='join'>join</Link></li>
                    <li onClick={toggleMenu}><Link to="/animations" className='animations'>animations</Link></li>
                    <li onClick={toggleMenu}><Link to="/teaching" className='teaching'>teaching (just the fun stuff)</Link></li>
                    <li onClick={toggleMenu}><Link to="/phys" className='phys'>University of Idaho - PHY...</Link></li>
                    <li onClick={toggleMenu}><Link to="/equipbook" className='equipbook'>equipment booking</Link></li>
                </ul>
            </div>
            )}
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