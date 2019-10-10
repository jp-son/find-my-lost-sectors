import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <Link className="navbar-brand" to="/"></Link>
            <ul className="navbar-nav mr-auto">
                <li><Link className="nav-link" to={'/'}>Home</Link></li>
                {/*<li><div className="pl-4"><Link className="nav-link" to={'/Predictor'}>Value Predictor</Link></div></li>*/}
            </ul>
        </nav>
    </header>
)

export default Header