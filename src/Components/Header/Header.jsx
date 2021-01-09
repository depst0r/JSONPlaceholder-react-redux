import React from 'react'

export const Header = () => {
    return <>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand">JSONPleaseholder API</span>
                <button className="btn btn-outline-success" type="submit">ADD POST</button>
            </div>
        </nav>

    </>
}