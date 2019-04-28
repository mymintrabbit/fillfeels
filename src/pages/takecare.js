import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import ICON_TAKECARE_IMAGE from '../assets/icon_takecare_image.svg'
import ICON_TAKECARE_LINK from '../assets/icon_takecare_link.svg'
import { ImagePicker, Modal } from 'antd-mobile'
import firebase from 'firebase'
import { pathRoutes } from '../routes'

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
  position: relative;
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

const Tapping = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  opacity: 0.7;
  color: white;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`

const TapButton = styled.div`
  border-radius: 50px;
  padding: 1em;
  color: gray;
  border: 3px solid gray;
  background: transparent;
`

const takecare = ({ location, history }) => {
  const [files, setFiles] = useState([])
  const [userMood, setUserMood] = useState(null)
  const [storageUrl, setStorageUrl] = useState([
    {
      url: 'https://lorempixel.com/200/200',
      isLink: false,
      isTapped: false,
    },
    {
      url: 'https://lorempixel.com/200/200',
      isLink: false,
      isTapped: false,
    },
  ])

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
                color: userMood.color,
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
            history.push(pathRoutes.Home.path)
          } catch ({ message }) {
            alert('Error', message, [{ text: 'Ok' }])
          }
        },
      },
    ])
  }

  const onSendasCare = async index => {
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
          careUrl: storageUrl[index].url,
          display: userData.display,
          imgUrl: userData.imgUrl,
          isLink: true,
          color: userMood.color,
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
      history.push(pathRoutes.Home.path)
    } catch ({ message }) {
      alert('Error', message, [{ text: 'Ok' }])
    }
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
      history.push(pathRoutes.Home.path)
    } catch ({ message }) {
      alert('Error', message, [{ text: 'Ok' }])
    }
  }

  const onClickStorage = index => {
    const newStorageUrl = [...storageUrl]
    newStorageUrl[index].isTapped = !newStorageUrl[index].isTapped

    setStorageUrl(newStorageUrl)
  }

  useEffect(() => {
    setUserMood(location.state)
  }, [])

  const storages = storageUrl.map((storage, index) => (
    <ImageWrapper key={index} onClick={() => onClickStorage(index)}>
      <ImageStorage src={storage.url} />{' '}
      {storage.isTapped ? (
        <Tapping>
          <TapButton onClick={() => onSendasCare(index)}>Send as care</TapButton>
        </Tapping>
      ) : null}
    </ImageWrapper>
  ))

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
        {storages}
      </ContentWrapper>
    </Layout>
  )
}

export default takecare
