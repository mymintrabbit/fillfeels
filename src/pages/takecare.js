import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import ICON_TAKECARE_IMAGE from '../assets/icon_takecare_image.svg'
import ICON_TAKECARE_LINK from '../assets/icon_takecare_link.svg'
import { ImagePicker, Modal } from 'antd-mobile'
import firebase from 'firebase'

const { alert, prompt } = Modal

const Layout = styled.div`
  flex: 1;
  padding: 60px 1.5em 1.5em;
  width: 100%;
  box-sizing: border-box;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-row-gap: 2em;
  padding-bottom: 70px;
`

const ImageWrapper = styled.div`
  display: flex;
`

const ImageIcon = styled.img`
  width: 50%;
`

const ImageStorage = styled.img`
  width: 100%;
  height: auto;
  background-size: cover;
  object-fit: cover;
`

const Picker = styled(ImagePicker)`
  display: none;
`

const takecare = ({ location }) => {
  const [files, setFiles] = useState([])
  const [userMood, setUserMood] = useState(null)

  const onClickImage = () => {
    const input = document.getElementsByClassName('am-image-picker-upload-btn')
    input[0].querySelector('input').click()
  }

  const onClickLink = () => {
    prompt('Link', 'please paste the link below here', [
      { text: 'Cancel' },
      {
        text: 'Send',
        onPress: async link => {
          const { uid } = await firebase.auth().currentUser

          try {
            let userData = await firebase
              .database()
              .ref('/users/' + uid)
              .once('value')
            userData = userData && userData.val()

            let caresBy = userMood.caresBy || {}

            caresBy = {
              ...caresBy,
              [userMood.userID]: {
                uid: userData.uid,
                createdAt: Date.now(),
                careUrl: link,
                display: userData.display,
                imgUrl: userData.imgUrl,
                isLink: true,
              },
            }

            await firebase
              .database()
              .ref('/users/' + userMood.userID + '/mood/' + userMood.key)
              .set({
                color: userMood.color,
                createdAt: userMood.createdAt,
                description: userMood.description,
                caresBy,
              })

            alert('Complete', 'You use 2 point to takecare', [{ text: 'Ok' }])
          } catch ({ message }) {
            alert('Error', message, [{ text: 'Ok' }])
          }
        },
      },
    ])
  }

  const onChange = async (files, type, index) => {
    setFiles(files)

    try {
      const { uid } = await firebase.auth().currentUser
      const ref = (Math.random() * 100000).toFixed(0).toString() + '.jpg'
      let downloadUrl = null

      const fileRef = await firebase
        .storage()
        .ref()
        .child(ref)

      const fileUrl = (files.length > 0 && files[0].url) || null
      if (fileUrl) {
        await fileRef.putString(fileUrl, 'data_url')
        downloadUrl = await fileRef.getDownloadURL()
      }

      let userData = await firebase
        .database()
        .ref('/users/' + uid)
        .once('value')
      userData = userData && userData.val()

      let caresBy = userMood.caresBy || {}

      caresBy = {
        ...caresBy,
        [userMood.userID]: {
          uid: userData.uid,
          createdAt: Date.now(),
          careUrl: downloadUrl,
          display: userData.display,
          imgUrl: userData.imgUrl,
        },
      }

      await firebase
        .database()
        .ref('/users/' + userMood.userID + '/mood/' + userMood.key)
        .set({
          color: userMood.color,
          createdAt: userMood.createdAt,
          description: userMood.description,
          caresBy,
        })

      alert('Complete', 'You use 2 point to takecare', [{ text: 'Ok' }])
    } catch ({ message }) {
      alert('Error', message, [{ text: 'Ok' }])
    }
  }

  useEffect(() => {
    setUserMood(location.state)
  }, [])

  return (
    <Layout>
      <Navbar> TakeCare </Navbar>
      <ContentWrapper>
        <ImageWrapper>
          <Picker
            files={[]}
            onChange={onChange}
            onImageClick={(index, fs) => console.log(index, fs)}
            selectable={files.length < 7}
          />
          <ImageIcon src={ICON_TAKECARE_LINK} onClick={onClickImage} />
          <ImageIcon src={ICON_TAKECARE_IMAGE} onClick={onClickLink} />
        </ImageWrapper>
        <ImageWrapper>
          <ImageStorage src={'https://lorempixel.com/200/200'} />
        </ImageWrapper>
        <ImageWrapper>
          <ImageStorage src={'https://lorempixel.com/300/301'} />
        </ImageWrapper>
        <ImageWrapper>
          <ImageStorage src={'https://lorempixel.com/301/300'} />
        </ImageWrapper>
      </ContentWrapper>
    </Layout>
  )
}

export default takecare
