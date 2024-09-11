import React from "react";
import botIcon from "../../../assets/botIcon.svg";
import { MetaAuthor, MetaTimestamp, ChatMessage as ChatMessageDiv, ChatMessageAvatar, ChatMessageContent, ChatMessageMetaWrapper, ChatMessageMeta, ChatMessageImage } from './Message.styled'

export default function Message({ msgData }) {

    const getDisplayDate = (time) => {
        let today = new Date();
        let timestamp = new Date(time);

        let timeFormat;


        if (today.getDay() == timestamp.getDay()) {
            let t = timestamp.toLocaleTimeString().split(':')
            timeFormat = `Today at ${t[0]}:${t[1]} ${t[2].split(' ')[1]}`
        } else if (today.getDay() == timestamp.getDay() + 1) {
            let t = timestamp.toLocaleTimeString().split(':')
            timeFormat = `Today at ${t[0]}:${t[1]} ${t[2].split(' ')[1]}`
        } else {
            let t = timestamp.toLocaleString().split(',');
            timeFormat = t.join(' ');
        }


        return timeFormat;
    }

    const content = !msgData.imgFile ?
        (msgData.content) :
        (<ChatMessageImage src={msgData.imgFile.url} />)

    return (

        <ChatMessageDiv align={msgData.role == 'user' ? 'right' : 'left'}>
            <ChatMessageAvatar
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
                src={msgData.role == 'user' ? `https://api.dicebear.com/7.x/pixel-art/svg?seed=0` : botIcon}
            />
            <ChatMessageMetaWrapper>
                <ChatMessageMeta align={msgData.role == 'user' ? 'right' : 'left'}>
                    <MetaAuthor>{msgData.role == 'user' ? 'You' : 'Reflex AI'}</MetaAuthor>
                    <MetaTimestamp>{getDisplayDate(Date.now())}</MetaTimestamp>
                </ChatMessageMeta>
                <ChatMessageContent >{content}</ChatMessageContent>
            </ChatMessageMetaWrapper>
        </ChatMessageDiv>
    )
}