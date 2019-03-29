import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button, InputItem } from 'antd-mobile'
import { pathRoutes } from '../routes'

const Wrapper = styled.div``

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5em;
  text-align: left;
`

const FieldTitle = styled.div`
  margin-bottom: 0.5em;
`

const Header = styled.div`
  font-size: 2.5em;
  margin-bottom: 1em;
`

const SubHeader = styled.div`
  font-size: 1.25em;
  margin-bottom: 2.5em;
  text-align: left;
  font-weight: bold;
`

const Layout = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding: 3em;
  box-sizing: border-box;
  background: #f5f5f5;
`

const HorizontalLine = styled.div`
  margin: 1em 0;
  display: flex;
  width: 100%;

  &:before,
  &:after {
    content: '';
    width: 100%;
    display: block;
    border-bottom: 1px solid #cfcfcf;
    margin: 10px;
  }

  &:before {
    margin-left: 0;
  }

  &:after {
    margin-right: 0;
  }
`

const Login = ({ history, ...props }) => {
  const [isLogin, setIsLogin] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Layout>
      <Header> Mood Tracker </Header>
      <SubHeader>{isLogin ? 'Login' : 'Register'}</SubHeader>
      <FieldGroup>
        <FieldTitle>Email</FieldTitle>
        <Wrapper>
          <InputItem placeholder="email" onChange={value => setEmail(value)} value={email} />
        </Wrapper>
      </FieldGroup>
      <FieldGroup>
        <FieldTitle>Password</FieldTitle>
        <Wrapper>
          <InputItem
            placeholder="password"
            type="password"
            onChange={value => setPassword(value)}
            value={password}
          />
        </Wrapper>
      </FieldGroup>
      <Button type="primary" onClick={() => history.push(pathRoutes.Home.path)}>
        {isLogin ? 'Login' : 'Register'}
      </Button>
      <HorizontalLine>or</HorizontalLine>
      <Button
        onClick={() =>
          setIsLogin(prevState => {
            setEmail('')
            setPassword('')
            return !prevState
          })
        }
      >
        {isLogin ? 'Register' : 'Login'}{' '}
      </Button>
    </Layout>
  )
}

export default Login
