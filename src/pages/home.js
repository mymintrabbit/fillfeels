import React, { useEffect } from 'react'
import firebase from 'firebase'
import styled from 'styled-components'

import Navbar from '../components/Navbar'
import { pathRoutes } from '../routes'
import { mapHueToColor, getGradient } from '../color-picker/utils'

const Layout = styled.div`
  flex: 1;
  padding: 1.5em;
  padding-top: 60px;
  width: 100%;
  box-sizing: border-box;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-row-gap: 1em;

  margin-top: 2em;
`

const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
`

const ContentTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Avatar = styled.img`
  display: block;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-size: cover;
  margin-right: 0.5em;
`

const ContentImage = styled.div`
  display: block;
  width: 290px;
  height: 290px;
  border-radius: 50%;
  margin: 1em auto;

  ${props =>
    props.isGradient
      ? `
  background: ${mapHueToColor(props.hue)};
  background-image: ${getGradient(props.hue, props.hue2)}
`
      : `
  background: ${mapHueToColor(props.hue)};
`}

  background: yellow;
`

const ContentDescription = styled.div``

const Home = () => {
  useEffect(() => {
    const isAuth = async () => {
      const user = await firebase.auth().currentUser

      if (user) {
        console.log('SIGN IN')
      } else {
        console.log('NOT SIGN IN')
      }
    }

    isAuth()
  }, [])

  return (
    <Layout>
      <Navbar> Home </Navbar>
      <ContentWrapper>
        <ContentItem>
          <ContentTitle>
            <Avatar src="http://lorempixel.com/g/100/100/" />
            Mackie...
          </ContentTitle>
          <ContentImage />
          <ContentDescription>loremrererqwewql;ekqwopeiasopdpoasdiop</ContentDescription>
        </ContentItem>
      </ContentWrapper>
    </Layout>
  )
}

export default Home
