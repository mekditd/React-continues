import React from 'react';



function Header() {
    return (
        <div>
            <img src='./Asset/Logo.PNG' border='0.5' alt='help' width='30' height='30' />
            <ul className = 'Navbar' style={{FlexDirection: 'column', textAlign: 'right' }}>
                <li>About</li>
                <li>Contact</li>
                <li>Login</li>
            </ul>
        </div>
    )
}


export default Header;