import React from 'react'
import { Link } from 'react-router-dom'
import lssymbol from '../images/yeet.png'

const Header = () => (
    <header>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <Link className="navbar-brand" to="/"><img src={lssymbol} className="img-responsive" alt="Banner" style={{width: 'auto', maxHeight:40, border:"0"}}></img></Link>
            {/*<Link className="navbar-brand" to="/">
                <div className = "row">
					<div className = "col"><img src={lssymbol} alt="Not Available" style={{height:"20%", width: "20%"}}></img></div>
					<div className = "col-md-auto"><h3>Home</h3></div>
				</div>
			</Link>*/}
            {/*<ul className="navbar-nav mr-auto">
                <li><Link className="nav-link" to={'/'}>Home</Link></li>
            </ul>*/}
        </nav>
    </header>
)

export default Header