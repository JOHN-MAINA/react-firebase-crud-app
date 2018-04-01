import React from 'react'
import {Link, NavLink} from 'react-router-dom'

class Navbar extends React.Component{
    render() {
        let styles = {
            color: '#fff'
        };
        return (
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark" style={styles}>
                <Link className="navbar-brand" to="/" >Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/" activeClassName='active'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/add" activeClassName='active'>Add Post</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/students" activeClassName='active'>View Students</NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;