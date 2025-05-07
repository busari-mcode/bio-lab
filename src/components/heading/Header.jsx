import React from 'react'
import './header.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Header = () => {
  return (
    <>
        <section className="header">
            <div className="web-name">
                <div className="logo">
                    <Link to="/" className='logo-comb'>
                        <h2>2</h2>
                        <h1>bio lab</h1>
                    </Link>
                </div>
                <h3><Link to="/">biophysics and bioimaging @ UI</Link></h3>
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