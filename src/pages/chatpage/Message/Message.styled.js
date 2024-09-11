import styled from "styled-components";

export const ChatMessage = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    max-width: 100%;
    user-select: none;
    flex-direction: row;
    align-items: flex-start;
    /* padding-top: 0.5rem; */
    margin: 1rem 0;


    flex-direction: ${( props ) => props.align == 'right' ? 'row-reverse' : 'row' };

    transition: background-color 0.3;

    :hover {
        background-color: ${({ theme }) => theme.tertiary};
        border-radius: 10px;

    }
`;

export const ChatMessageAvatar = styled.img`
    width: 50px;
    height: 50px;
    margin: 0.7rem 1rem;
    object-fit: cover;
    margin-right: 1rem;
    border-radius: 50%;
`;

export const ChatMessageMetaWrapper = styled.div`
    overflow-x: hidden;
    width: 100%;
    /* background-color: yellow; */
    height: 100%;
    display: flex;
    margin-left: 1rem;
    flex-direction: column;
`;

export const ChatMessageMeta = styled.div`
    padding: 0.2rem 0;
    display: flex;
    align-items: center;
    flex-direction: ${( props ) => props.align == 'right' ? 'row-reverse' : 'row'};
    align-items: ${( props ) => props.align == 'right' ? 'flex-end' : 'flex-start' };

`;

export const MetaAuthor = styled.div`
    max-width: 50%;
    font-size: 1rem;
    margin-right: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.lightText};
    
`

export const MetaTimestamp = styled.div`
    font-size: 0.8rem;
    line-height: 1rem;
    max-width: 20%;
    font-weight: 450;
    color: ${({ theme }) => theme.lightText};
    margin-right: 1rem;
    opacity: 0.8;

`

export const ChatMessageContent = styled.div`
    /* background-color: blue; */
    color: ${({ theme }) => theme.lightText};
    font-size: 0.9rem;
    padding: 1rem 0;
    padding-right: 1rem;
    word-break: break-word;
    white-space: pre-line;
    overflow-wrap: break-word;
    -ms-word-break: break-word;
    word-break: break-word;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;  
    max-width: 100%;
`;

export const ChatMessageImage = styled.img`
    object-fit: cover;
    height: 300px;
    width: 100px;
    width: auto;
`
