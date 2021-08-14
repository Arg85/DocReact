import React from 'react'
import Logo from "../Images/Official Logo.svg";
function Header() {
    return (
        <>
            <main>
                <div className="logo">
                    <img src={Logo} alt="Doctor Logo"></img>
                </div>
                <div className="centex">
                    <h2>Form for Doctor</h2>
                </div>
            </main>
        </>
    )
}

export default Header
