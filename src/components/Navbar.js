import React from 'react'

class Navbar extends React.Component{
    render() {
        let styles = {
            color: '#fff'
        };
        return (
            <nav className="navbar navbar-dark bg-dark" style={styles}>
                <a className="navbar-brand" >Navbar</a>
            </nav>
        )
    }
}

export default Navbar;