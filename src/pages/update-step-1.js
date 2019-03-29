import React, { Component } from 'react'
import '@radial-color-picker/react-color-picker/dist/react-color-picker.umd.min.css'
import ColorPicker from '../color-picker/react-color-picker'
import styled from 'styled-components'

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

const ColorPickerWrapper = styled.div`
  position: relative;
`

const MoodText = styled.div`
  color: black;
  position: absolute;
  transform: rotate(${props => props.degree || 0}deg);
`

class UpdateStep1 extends Component {
  state = {
    hue: 90,
    saturation: 100,
    luminosity: 50,
    alpha: 1,
    isGradient: false,
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

  render() {
    const { isGradient } = this.state

    return (
      <header className="App-header">
        <ColorPickerWrapper>
          <ColorPicker {...this.state} className="app-logo" onChange={this.onChange} />
          {isGradient && (
            <ColorPicker {...this.state} className="app-logo" onChange={this.onChange2} />
          )}
          {/* <MoodText degree={40}>ANGRY</MoodText>
          <MoodText degree={40}>IN LOVE</MoodText> */}
          <MoodText degree={-40}>HAPPY</MoodText>
          {/* <MoodText degree={40}>NEUTRAL</MoodText>
          <MoodText degree={40}>SAD</MoodText>
          <MoodText degree={40}>DISTRESS</MoodText> */}
        </ColorPickerWrapper>
        <ButtonWrapper>
          {
            <AddColorButton disabled={isGradient} onClick={() => this.onAdd()}>
              &#10010;
            </AddColorButton>
          }
        </ButtonWrapper>
      </header>
    )
  }
}

export default UpdateStep1
