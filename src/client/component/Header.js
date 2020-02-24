import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ auth }) => {
    // console.log('My auth status is', auth)

    const authButton = auth ? (<a href="/api/logout">Logout</a>) : (<a href="/api/auth/google">Login</a>)

    return (
        <header className="header">
            <Link to="/" className="logo">React SSR</Link>
            <div className="navs">
                <Link to="/users">Users</Link>
                <Link to="/admin">Admin</Link>
                {authButton}
            </div>
        </header>
    )
}

const mapStateToProps = ({ auth }) => {
    return { auth }
}

export default connect(mapStateToProps)(Header)
