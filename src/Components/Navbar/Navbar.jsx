import React from 'react'
import { NavbarContainer, NavLeft, NavLogo, NavRight } from './Navbar.styled'
import logo from '../../assets/img.svg'
const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLeft>
        <NavLogo src={logo} />
      </NavLeft>
      <NavRight>

      </NavRight>
    </NavbarContainer>
  )
}

export default Navbar
