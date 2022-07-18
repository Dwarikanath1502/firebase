import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import {
    Navbar,
    NavbarBrand,
    NavbarText,
    NavbarToggler,
    NavItem,
    Nav,
    Collapse
} from 'reactstrap'
import { userContext } from '../context/userContext'

const Header = () => {
    // context
    const context = useContext(userContext)

    // toggler
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Navbar
            color="dark"
            expand="md"
            dark
        >
            <NavbarBrand tag={Link} to="/">
                G Keep
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse navbar isOpen={isOpen}>
                <Nav
                    className="me-auto"
                    navbar
                >

                </Nav>
                <NavItem className='mx-2'>

                    {context.user ? (<NavbarText onClick={() => { context.setUser('') }} tag={Link} to='/signin' >Logout</NavbarText>)
                        :
                        <>
                            <NavbarText className='mx-3' tag={Link} to='/signup'>Sign Up</NavbarText>
                            <NavbarText tag={Link} to='/signin'>Sign In</NavbarText>
                        </>
                    }
                </NavItem>
            </Collapse>
        </Navbar>

    )
}

export default Header