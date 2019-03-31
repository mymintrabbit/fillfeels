import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { Icon, InputItem, ImagePicker } from 'antd-mobile'
import { pathRoutes } from '../routes'

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

const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #68bbdd;
  font-weight: bold;
  margin-top: 10px;
`

const GridField = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 10px;
  align-items: center;
  justify-items: start;
`

const Picker = styled(ImagePicker)`
  display: none;
`

const ProfileEdit = ({ history, ...props }) => {
  const [files, setFiles] = useState([])

  const onChangePhoto = () => {
    const input = document.getElementsByClassName('am-image-picker-upload-btn')
    input[0].querySelector('input').click()
  }

  const onChange = (files, type, index) => {
    setFiles(files)
  }

  const onLeftClick = () => {
    history.push(pathRoutes.Profile.path)
  }

  const onDone = () => {
    history.push(pathRoutes.Profile.path)
  }

  return (
    <Layout>
      <Navbar
        icon={<Icon type="left" />}
        onLeftClick={onLeftClick}
        rightContent={<div onClick={onDone}>Done</div>}
      >
        Edit Profile
      </Navbar>
      <AvatarWrapper>
        <Avatar src="http://lorempixel.com/g/100/100/" />
        {/* <Avatar src={files.length > 0 && files[0].url} /> */}
      </AvatarWrapper>
      <Label onClick={onChangePhoto}>Change Photo</Label>
      <Picker
        files={[]}
        onChange={onChange}
        onImageClick={(index, fs) => console.log(index, fs)}
        selectable={files.length < 7}
      />
      <GridField>
        <div>Email</div>
        <InputItem disabled value={'TEST 123'} />
        <div>Username</div>
        <InputItem value={'Username'} />
        <div>Phone</div>
        <InputItem value={'0897971233'} />
      </GridField>
    </Layout>
  )
}

export default ProfileEdit
