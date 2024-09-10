import React, { useState } from 'react'
import './Chatpage.css'
import Navbar from '../../Components/Navbar/Navbar'
import ChatBox from '../../Components/ChatBox/ChatBox'
import MessageArea from '../../Components/MessageArea/MessageArea'
import { ContainerDiv } from '../../Components/Container/Container.styled'
const Chatpage = () => {
 

  return (
    <ContainerDiv>
      <Navbar />
      <ChatBox></ChatBox>
    </ContainerDiv>
    
  )

    
}

export default Chatpage


