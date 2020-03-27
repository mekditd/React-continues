import React from 'react';



function Header() {
    const style = {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'end',
        paddingLeft: '5px'
         }
    return (
        <div>
            <img src='./Asset/Logo.PNG' border='0.5' alt='help' width='30' height='30' />
            <ul className = 'Navbar' >
                <li style = { style }>About</li>
                <li style = { style }>Contact</li>
                <li style = { style }>Login</li>
            </ul>
        </div>
    )
}


export default Header;