import styled from "styled-components";

export const NavbarContainer = styled.div`
    width: 100%;
    flex: 0.1;
    height: 10%;
    background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const NavLeft = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    background-color: blue;
    height: 100%;
    align-items: center;
`

export const NavRight = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    background-color: yellow;
    height: 100%;
    align-items: center;

`

export const NavLogo = styled.img`
    object-fit: cover;
    height: 90%;
    width: auto;
`