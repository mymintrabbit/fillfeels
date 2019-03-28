import React, { Component } from 'react'
import '@radial-color-picker/react-color-picker/dist/react-color-picker.umd.min.css'
import ColorPicker from '../color-picker/react-color-picker'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
  margin-top: 450px;
`

const AddColorButton = styled.div`
  display: block;
  width: 100%
  text-align: center;
  color: #00ff00;
  padding: 0.5em;
  cursor: pointer;
  text-decoration: underline;
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
        <ColorPicker {...this.state} className="app-logo" onChange={this.onChange} />
        {isGradient && (
          <ColorPicker {...this.state} className="app-logo" onChange={this.onChange2} />
        )}
        <ButtonWrapper>
          {!isGradient && (
            <React.Fragment>
              <AddColorButton onClick={() => this.onAdd()}>+ เพิ่มสี</AddColorButton>
              <div>
                <small>หมายเหตุ: เมือเพิ่มสีแล้วจะไม่สามารถแก้ไขสีเดิมได้</small>
              </div>
            </React.Fragment>
          )}

          <p>Version 1.01</p>
        </ButtonWrapper>
      </header>
    )
  }
}

export default UpdateStep1
