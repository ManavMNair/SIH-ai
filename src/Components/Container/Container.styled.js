import styled from "styled-components";

export const ContainerDiv = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    max-height: 100vh;
    max-width: 100vw;
    flex-direction: column;
    background-color: ${({ theme }) => theme.secondary};
    justify-content: center;
    align-items: center;


`