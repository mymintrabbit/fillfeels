import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {  InputItem, Modal } from 'antd-mobile'
import { pathRoutes } from '../routes'
import firebase from 'firebase'
import { NO_AVATAR_IMG_URL } from '../config'
import LOGO from '../assets/logo.svg'
import SIGN_UP_BTN from '../assets/sign_up_btn.svg'

const alert = Modal.alert

const Wrapper = styled.div``

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5em;
  text-align: left;
  box-sizing: border-box;
  border: 1px solid gray;
  border-radius: 25px;
  margin: 10px;
  margin-bottom: 0;
  padding: 1em;

  > * {
    border-bottom: 1px solid #efefef;
  }
`

const LoginButton = styled.div`
  display: block;
  margin: 0 auto;
  background: black;
  width: 200px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  color: white;
`

const Header = styled.div`
  font-size: 2.5em;
  margin-bottom: 3em;
`

const Layout = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding-top: 4em;
  box-sizing: border-box;
  background: white;
`

const SignUpActionWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 25%;
  background: black;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  padding: 5px;
  box-sizing: border-box;
`

const SignUpStateWrapper = styled(SignUpActionWrapper)`
  height: 80%;
  padding: 2.5em;

  * {
    color: white !important;
  }

  .am-list-item {
    background: black;
    border-bottom: 1px solid gray;
    margin-bottom: 1em;
  }
`

const SignUpText = styled.div`
  text-align: center;
  color: white;
  border-bottom: 1px solid gray;
  padding: 5px;
  box-sizing: border-box;
`

const SignUpBtn = styled.img`
  width: 100%;
`

const SignUpStateBtn = styled.img`
  width: 100%;
  position: absolute;
  bottom: 20%;
  left: 0;
`

const Login = ({ history, ...props }) => {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [tel, setTel] = useState('')
  const [displayName, setDisplayName] = useState('')

  useEffect(() => {}, [])

  const onSubmitClick = async () => {
    if (isLogin) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)

        history.push(pathRoutes.Home.path)
      } catch ({ message }) {
        alert('Error', message, [{ text: 'Ok' }])
      }
    } else {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const { uid } = await firebase.auth().currentUser

        const users = {
          uid,
          display: displayName,
          tel,
          imgUrl: NO_AVATAR_IMG_URL,
          email,
        }

        firebase
          .database()
          .ref('users/' + uid)
          .set(users)

        history.push(pathRoutes.Home.path)
      } catch ({ message }) {
        alert('Error', message, [{ text: 'Ok' }])
      }
    }
  }

  return (
    <Layout>
      {isLogin ? (
        <React.Fragment>
          <Header>
            <img src={LOGO} alt={"logo"} />
          </Header>
          <FieldGroup>
            <Wrapper>
              <InputItem placeholder="Email" onChange={value => setEmail(value)} value={email} />
            </Wrapper>
            <Wrapper>
              <InputItem
                placeholder="Password"
                type="password"
                onChange={value => setPassword(value)}
                value={password}
              />
            </Wrapper>
          </FieldGroup>
          <LoginButton onClick={onSubmitClick}>Log in</LoginButton>
          <SignUpActionWrapper>
            <SignUpText>Don't have an account ?</SignUpText>
            <SignUpBtn src={SIGN_UP_BTN} onClick={() => setIsLogin(false)} />
          </SignUpActionWrapper>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <img src={LOGO} alt={"logo"}/>
          <SignUpStateWrapper>
            <Wrapper>
              <InputItem placeholder="Email" onChange={value => setEmail(value)} value={email} />
            </Wrapper>
            <Wrapper>
              <InputItem
                placeholder="Username"
                onChange={value => setDisplayName(value)}
                value={displayName}
              />
            </Wrapper>
            <Wrapper>
              <InputItem placeholder="ID" />
            </Wrapper>
            <Wrapper>
              <InputItem
                placeholder="Phone Number"
                type="phone"
                onChange={value => setTel(value)}
                value={tel}
              />
            </Wrapper>
            <Wrapper>
              <InputItem
                placeholder="Password"
                type="password"
                onChange={value => setPassword(value)}
                value={password}
              />
            </Wrapper>
            <SignUpStateBtn src={SIGN_UP_BTN} onClick={onSubmitClick} />
          </SignUpStateWrapper>
        </React.Fragment>
      )}
    </Layout>
  )
}

export default Login
