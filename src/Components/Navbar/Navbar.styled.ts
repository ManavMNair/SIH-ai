import styled from "styled-components";

export const NavbarContainer = styled.div`
    width: 100%;
    flex: 0.1;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: ${({ theme }) => theme.primary};
`


export const NavLeft = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    height: 100%;
    align-items: center;
    margin-left: 3rem;
`

export const NavRight = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    height: 100%;
    align-items: center;

`

export const NavLogo = styled.img`
    object-fit: cover;
    height: 70%;
    width: auto;
    background-color: transparent;
    margin-left: 1rem;
`