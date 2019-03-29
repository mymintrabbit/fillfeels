import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { getGradient, mapHueToColor } from '../color-picker/utils'
import { TextareaItem, Icon } from 'antd-mobile'
import { pathRoutes } from '../routes'

const ColorCircle = styled.div`
  display: block;
  width: 290px;
  height: 290px;
  border-radius: 50%;
  margin: 0 auto;

  ${props =>
    props.isGradient
      ? `
    background: ${mapHueToColor(props.hue)};
    background-image: ${getGradient(props.hue, props.hue2)}
  `
      : `
    background: ${mapHueToColor(props.hue)};
  `}
`

const CaptionWrapper = styled.div`
  display: flex;
  margin-bottom: 1em;

  textarea {
    min-width: 220px;
  }
`

const Avatar = styled.img`
  display: block;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-size: cover;
`

const Layout = styled.div`
  flex: 1;
  padding: 1.5em;
  padding-top: 100px;
  width: 100%;
  box-sizing: border-box;
`

const UpdateStep2 = props => {
  const { isGradient = false, hue = 0, hue2 = 0 } = props.location.state

  const onShare = () => {
    console.log('ON SHARE')
    // props.location.push({})
  }

  const onLeftClick = () => {
    props.history.push(pathRoutes.UpdateStepOne.path, {
      isGradient,
      hue,
      hue2,
    })
  }

  return (
    <Layout>
      <Navbar
        icon={<Icon type="left" />}
        onLeftClick={() => onLeftClick()}
        rightContent={<div onClick={() => onShare()}>Share</div>}
      >
        Update Your Mood
      </Navbar>
      <CaptionWrapper>
        <Avatar src="http://lorempixel.com/g/100/100/" />
        <TextareaItem rows={3} placeholder="caption" />
      </CaptionWrapper>
      <ColorCircle isGradient={isGradient} hue={hue} hue2={hue2} />
    </Layout>
  )
}

export default UpdateStep2
