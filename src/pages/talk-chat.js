import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
// import { pathRoutes } from '../routes'
import { Icon } from 'antd-mobile'

const Layout = styled.div`
  flex: 1;
  padding: 1.5em;
  padding-top: 130px;
  width: 100%;

  box-sizing: border-box;
`

const Theme = styled.div`
  position: absolute;
  left: 0;
  top: 40px;

  width: 100%;
  height: 70px;

  background: green;
`

const ChatWrapper = styled.div`
  display: grid;
  grid-row-gap: 1em;
`

const ChatSelf = styled.div`
  max-width: 60%;
  margin-left: auto;
  border: 1px solid gray;
  border-radius: 25px;
  text-align: left;
  padding: 0.25em 1em;
`

const Avatar = styled.img`
  display: block;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-size: cover;
  background: green;
`

const ChatOppositeWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

const ChatOpposite = styled(ChatSelf)`
  margin-left: 10px;
`

const ChatBoxWrapper = styled.div`
  padding: 0 1em;

  position: fixed;
  bottom: 55px;
  left: 0;
  display: flex;
  box-sizing: border-box;
  width: 100%;
`

const InputBox = styled.input`
  flex: 1;
  border: 1px solid gray;
  border-radius: 25px;
  margin-left: 5px;
  padding: 0 0.5em;
  box-sizing: border-box;
  transition: all 0.6s;
`

const SendButton = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  padding: 0 5px;
  margin-left: auto;
`

const TalkChat = ({ history, ...props }) => {
  return (
    <Layout>
      <Navbar icon={<Icon type="left" />}>Mackie</Navbar>
      <Theme />
      <ChatWrapper>
        <ChatSelf>import * as firebase from</ChatSelf>
        <ChatOppositeWrapper>
          <Avatar />
          <ChatOpposite>asdasdsad</ChatOpposite>
        </ChatOppositeWrapper>
      </ChatWrapper>
      <ChatBoxWrapper>
        <Avatar />
        <InputBox />
        <SendButton className="send-btn">send</SendButton>
      </ChatBoxWrapper>
    </Layout>
  )
}

export default TalkChat
