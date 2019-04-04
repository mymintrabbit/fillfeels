import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { pathRoutes } from '../routes'
import { NO_AVATAR_IMG_URL } from '../config'
import firebase from 'firebase'
import { Modal } from 'antd-mobile'

const alert = Modal.alert

const Layout = styled.div`
  flex: 1;
  padding: 1.5em;
  padding-top: 60px;
  width: 100%;
  box-sizing: border-box;
`

const Avatar = styled.img`
  display: block;
  width: 85px;
  height: 85px;

  margin: 0 auto;
  border-radius: 50%;
`

const AvatarWrapper = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
`

const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 100%;

  margin-left: 10px;
`

const AlignTop = styled.div`
  margin-bottom: auto;
`

const AlignBottom = styled.div`
  margin-top: auto;
`

const HorizontalLine = styled.div`
  width: 100%;
  height: 0;
  border: 1px solid #efefef;
`

const Profile = ({ history, ...props }) => {
  const [imgUrl, setImgUrl] = useState(NO_AVATAR_IMG_URL)
  const [displayName, setDisplayName] = useState('Profile')

  const getCurrentUserData = async () => {
    try {
      const { uid } = firebase.auth().currentUser
      const data = await firebase
        .database()
        .ref('/users/' + uid)
        .once('value')
      const userData = data.val()
      setImgUrl(userData.imgUrl)
      setDisplayName(userData.display)
    } catch ({ message }) {
      alert('Error', message, [{ text: 'Ok' }])
    }
  }

  useEffect(() => {
    getCurrentUserData()
  }, [])

  const onEdit = () => {
    history.push(pathRoutes.ProfileEdit.path)
  }

  return (
    <Layout>
      <Navbar>{displayName}</Navbar>
      <AvatarWrapper>
        <Avatar src={imgUrl} />
        <MenuWrapper>
          <AlignTop onClick={onEdit}>Icon</AlignTop>
          <HorizontalLine />
          <AlignBottom>Icon</AlignBottom>
        </MenuWrapper>
      </AvatarWrapper>
    </Layout>
  )
}

export default Profile
