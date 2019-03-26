import React, { Component } from 'react'
// import logo from './logo.svg';
import '@radial-color-picker/react-color-picker/dist/react-color-picker.umd.min.css'
import ColorPicker from './color-picker/react-color-picker'
import { TabBar, NavBar, Icon } from 'antd-mobile'
import styled from 'styled-components'
import './App.css'
import 'antd-mobile/dist/antd-mobile.css'
import update from './assets/update.svg'
import profile from './assets/profile.svg'
import talk from './assets/talk.svg'
import home from './assets/home.svg'
import buddy from './assets/buddy.svg'

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

const BottomTab = styled.div`
  #tab-bar {
    display: flex;
    flex-direction: column;
  }
  #tab-bar {
    height: 40px;
  }
  #tab-bar .am-tab-bar {
    background-color: white;
  }
`
const CustomIcon = ({ type, className = '', size = 'md', ...restProps }) => (
  <svg className={`am-icon am-icon-${type.substr(1)} am-icon-${size} ${className}`} {...restProps}>
    <use xlinkHref={type} /> {/* svg-sprite-loader@0.3.x */}
    {/* <use xlinkHref={#${type.default.id}} /> */} {/* svg-sprite-loader@latest */}
  </svg>
)

class App extends Component {
  state = {
    hue: 90,
    saturation: 100,
    luminosity: 50,
    alpha: 1,
    isGradient: false,
    selectedTab: 'redTab',
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
      <div className="App">
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
        >
          NavBar
        </NavBar>

        <header className="App-header">
          <ColorPicker {...this.state} className="app-logo" onChange={this.onChange} />
          {isGradient && (
            <ColorPicker {...this.state} className="app-logo" onChange={this.onChange2} />
          )}
          <ButtonWrapper>
            {
              <AddColorButton disabled={isGradient} onClick={() => this.onAdd()}>
                &#10010;
              </AddColorButton>
            }
          </ButtonWrapper>
        </header>

        <BottomTab>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            tabBarPosition="bottom"
          >
            <TabBar.Item
              icon={
                // <CustomIcon type={require('./assets/home.svg')} />
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${home})`,
                  }}
                />
              }
              selectedIcon={
                // <CustomIcon type={require('./assets/home.svg')} />
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background: require('./assets/home.svg'),
                  }}
                />
              }
              selected={this.state.selectedTab === 'blueTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'blueTab',
                })
              }}
            />
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background: buddy,
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background: buddy,
                  }}
                />
              }
              selected={this.state.selectedTab === 'redTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'redTab',
                })
              }}
            />
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background: update,
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background: update,
                  }}
                />
              }
              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'greenTab',
                })
              }}
            />
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background: talk,
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background: talk,
                  }}
                />
              }
              selected={this.state.selectedTab === 'yellowTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'yellowTab',
                })
              }}
            />
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background: profile,
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background: profile,
                  }}
                />
              }
              selected={this.state.selectedTab === 'blackTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'blackTab',
                })
              }}
            />
          </TabBar>
        </BottomTab>
      </div>
    )
  }
}

export default App
