import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component  {
    render () {
        return (
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink exact activeClassName='active' to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName='active' to='/about'>About</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}