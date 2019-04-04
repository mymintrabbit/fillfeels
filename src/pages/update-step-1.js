import React, { Component } from 'react'
import '@radial-color-picker/react-color-picker/dist/react-color-picker.umd.min.css'
import ColorPicker from '../color-picker/react-color-picker'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { pathRoutes } from '../routes'

const LayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 375px;
`

const ButtonWrapper = styled.div`
  margin-top: 400px;
`

const AddColorButton = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 0.5em;
  cursor: pointer;
  border-radius: 50%;
  border: 3px solid white;
  font-size: 1.5em;
  width: 40px;
  height: 40px;
  background: #64cc9a;

  ${props =>
    props.disabled &&
    `
    opacity: 0.4;
  `}
`

const MoodText = styled.div`
  color: black;
  font-size: ${props => (props.isSmall ? 12 : 14)}px;
  position: absolute;
  transform: rotate(${props => props.degree}deg);
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  right: ${props => props.right}px;
`

class UpdateStep1 extends Component {
  state = {
    hue: 90,
    saturation: 100,
    luminosity: 50,
    alpha: 1,
    isGradient: false,
  }

  componentDidMount() {
    if (this.props.location.state) {
      this.setState({
        ...this.props.location.state,
      })
    }
  }

  onChange = ({ hue, saturation, luminosity, alpha, x, y }) => {
    this.setState({ hue, saturation, luminosity, alpha, x, y })
  }

  onChange2 = ({ hue }) => {
    this.setState({ hue2: hue })
  }

  onAdd = () => {
    this.setState({ isGradient: true })
  }

  onNext = () => {
    this.props.history.push(pathRoutes.UpdateStepTwo.path, {
      ...this.state,
    })
  }

  render() {
    const { isGradient } = this.state
    const width = window.innerWidth
    let w = 0
    let isSmall = false
    if (width < 350) {
      w = 15
      isSmall = true
    }

    return (
      <React.Fragment>
        <Navbar rightContent={<div onClick={() => this.onNext()}>Next</div>}>
          Update Your Mood
        </Navbar>
        <LayoutWrapper>
          <ColorPicker {...this.state} onChange={this.onChange} />
          {isGradient && <ColorPicker {...this.state} onChange={this.onChange2} />}
          <MoodText degree={-120} top={310} left={15 - w} isSmall={isSmall}>
            ANGRY
          </MoodText>
          <MoodText degree={-80} top={200} left={0 - w} isSmall={isSmall}>
            IN LOVE
          </MoodText>
          <MoodText degree={-30} top={80} left={80 - w} isSmall={isSmall}>
            HAPPY
          </MoodText>
          <MoodText degree={28} top={80} right={80 - w} isSmall={isSmall}>
            NEUTRAL
          </MoodText>
          <MoodText degree={85} top={200} right={10 - w} isSmall={isSmall}>
            SAD
          </MoodText>
          <MoodText degree={120} top={310} right={3 - w} isSmall={isSmall}>
            DISTRESS
          </MoodText>
          <ButtonWrapper>
            {
              <AddColorButton disabled={isGradient} onClick={() => this.onAdd()}>
                &#10010;
              </AddColorButton>
            }
          </ButtonWrapper>
        </LayoutWrapper>
      </React.Fragment>
    )
  }
}

export default UpdateStep1
