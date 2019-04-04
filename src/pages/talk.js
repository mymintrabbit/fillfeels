import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { pathRoutes } from '../routes'

const Layout = styled.div`
  flex: 1;
  padding: 1.5em;
  padding-top: 75px;
  width: 100%;

  box-sizing: border-box;
`

const GridUserWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 2fr;
  grid-gap: 1em;
  margin-bottom: 1em;
`

const Avatar = styled.img`
  display: block;
  width: 65px;
  height: 65px;
  border-radius: 50%
  background-size: cover;
`

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const UserTitle = styled.div`
  font-weight: bold;
`

const LastTalk = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 155px;
  text-align: left;
`

const Dot = styled.div`
  display: block;
  width: 30px;
  height: 30px;
  margin: auto;
  margin-right: 0;
  border-radius: 50%;
  background: blue;
`

const Talk = ({ history, ...props }) => {
  return (
    <Layout>
      <Navbar>Talks</Navbar>
      <GridUserWrapper>
        <Avatar src={'http://lorempixel.com/g/100/100/'} />
        <UserDetails>
          <UserTitle>Mackie</UserTitle>
          <LastTalk>lorem loremloremloremloremloremloremloremloremloremloremlorem</LastTalk>
        </UserDetails>
        <Dot />
      </GridUserWrapper>
      <GridUserWrapper>
        <Avatar src={'http://lorempixel.com/g/100/100/'} />
        <UserDetails>
          <UserTitle>Mackie</UserTitle>
          <LastTalk>lorem loremloremloremloremloremloremloremloremloremloremlorem</LastTalk>
        </UserDetails>
      </GridUserWrapper>
    </Layout>
  )
}

export default Talk
