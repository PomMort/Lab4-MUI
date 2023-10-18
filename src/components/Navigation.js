import React from "react"
import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
import { Link } from "react-router-dom"
import { Navbar, Icon } from "react-materialize"
export default function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <Navbar className="menu"
            alignLinks="right"
            brand={<span style={{ color: theme.color }}  className="brand-logo">Film Card</span>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
        >
            <ul className="nav-option">
            <li>
                    <Link style={{ color: theme.color }} to="/"><Icon left>home</Icon> Home</Link>
                </li>
                <li to="/about">
                    <Link style={{ color: theme.color }} to='/about'><Icon left>info_outline</Icon> About</Link>
                </li>
                <li to='/new'>
                    <Link style={{ color: theme.color }} to='/news'><Icon left>dvr</Icon> News</Link>
                </li>
                <li href='/contact'>
                    <Link style={{ color: theme.color }} to='/contact'><Icon left>contacts</Icon> Contact</Link>
                </li>
            </ul>
            <div style={{ position: 'relative' }}>
                <a className="switch-mode" href="#" onClick={toggle}
                    style={{
                        backgroundColor: theme.backgroundColor,
                        color: theme.color,
                        outline: 'none'
                    }} data-testid="toggle-theme-btn">
                    Switch Nav to {dark ? 'Light' : 'Dark'} mode
                </a>
            </div>
        </Navbar>
    )























    // const { theme, toggle, dark } = useContext(ThemeContext)
    // return (
    //     <div>
    //         <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
    //             <ul style={{borderColor: 'black', borderStyle: 'solid'}}>
    //                 <li><a style={{ color: theme.color }} className="active" href="#home">Home</a></li>
    //                 <li><a style={{ color: theme.color }} href="#news">News</a></li>
    //                 <li><a style={{ color: theme.color }} href="#about">About</a></li>
    //                 <li><a style={{ color: theme.color }} href="#contact">Contact</a></li>
    //                 <li className="switch-btn">
    //                     <a className="switch-mode" href="#" onClick={toggle}
    //                         style={{
    //                             color: theme.color,
    //                             outline: 'none'
    //                         }} data-testid="toggle-theme-btn">
    //                         Switch Nav to {dark ? 'Light' : 'Dark'} mode
    //                     </a>
    //                 </li>
    //             </ul>
    //         </nav>
    //     </div>
    // )
}