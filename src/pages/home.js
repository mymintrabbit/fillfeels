import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import styled from 'styled-components'

import Navbar from '../components/Navbar'
// import { pathRoutes } from '../routes'
import { mapHueToColor, getGradient } from '../color-picker/utils'
import { getDateDiff } from '../utils'

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
`

const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5em 0;
  padding-bottom: 4em;

  &:not(last-child) {
    border-bottom: 1px solid #efefef;
  }
`

const ContentTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
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

  background: yellow;

  ${props =>
    props.isGradient
      ? `
  background: ${mapHueToColor(props.hue)};
  background-image: ${getGradient(props.hue, props.hue2)};
`
      : `
  background: ${mapHueToColor(props.hue)};
`}
`

const ContentDescription = styled.div`
  text-align: left;
  word-break: break-word;
`

const Time = styled.div`
  position: absolute;
  top: 4px;
  right: 0;
  // font-size: 12px !important;
  font-weight: normal !important;
`

const Home = () => {
  const [moodList, setMoodList] = useState([])

  useEffect(() => {
    const getMood = async () => {
      const ref = await firebase
        .database()
        .ref('users/')
        .once('value')

      const users = ref && ref.val()
      const moodList = Object.values(users).reduce((result, user) => {
        let userMood = []
        if (user.mood) {
          userMood = Object.values(user.mood).map(mood => {
            return {
              display: user.display,
              email: user.email,
              imgUrl: user.imgUrl,
              tel: user.tel,
              ...mood,
            }
          })
        }

        result = [...result, ...userMood]
        return result
      }, [])

      moodList.sort((a, b) => b.createdAt - a.createdAt)
      setMoodList(moodList)
    }

    getMood()
  }, [])

  const moods = moodList.map((mood, index) => (
    <ContentItem key={index}>
      <ContentTitle>
        <Avatar src={mood.imgUrl} />
        {mood.display}
        <Time>{getDateDiff(mood.createdAt)}</Time>
      </ContentTitle>
      <ContentImage {...mood.color} />
      <ContentDescription>{mood.description}</ContentDescription>
    </ContentItem>
  ))

  return (
    <Layout>
      <Navbar> Home </Navbar>
      <ContentWrapper>{moods}</ContentWrapper>
    </Layout>
  )
}

export default Home
