import styled from "styled-components";

export const ChatBoxContainer = styled.div`
    display: flex;
    width: 100%;
    height: 90%;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    background-color: ${( props ) => props.theme.tertiary};
`

export const ChatBoxDiv = styled.div`
    width: 100%;
    height: 90%;
`

export const InputContainer = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.primary};
    height: 10%;
    min-height: 10%;
    min-width: 90%;
    display: flex;
    background-color: ${({ theme }) => theme.tertiary};
    justify-content: center;
    align-items: center;
`

export const ChatMessageContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    /* background-color: ${({ theme }) => theme.primary}; */
    /* border-radius: 10px; */
`


export const ChatFormContainer = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 100%;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.primary};
`

export const ChatFormUploadBtn = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & {
        color: ${({ theme }) => theme.text};

        font-size: 1.7rem;
    }
`

export const ChatFormInput = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SendBtn = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & {
        color: ${({ theme }) => theme.text};
        font-size: 1.6rem;
    }
`

export const StyledInput = styled.input`

    border: none;
    width: 100%;
    outline: none;
    border-radius: 30px;
    height: 70%;
    line-height: 50px;
    padding: 0 1rem;
    /* padding-left: 1rem;; */
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.tertiary};
    font-weight: 500;
    /* margin-bottom: 2rem; */

    &::placeholder {
        font-size: 1rem;
    }
`