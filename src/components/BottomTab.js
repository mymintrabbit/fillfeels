import React, { Component } from 'react'
// import logo from './logo.svg';
import { TabBar } from 'antd-mobile'
import styled from 'styled-components'
import './App.css'
import 'antd-mobile/dist/antd-mobile.css'
import update from './assets/update.svg'
import profile from './assets/profile.svg'
import talk from './assets/talk.svg'
import home from './assets/home.svg'
import buddy from './assets/buddy.svg'

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
  position: fixed;
  bottom: 0;
  width: 100%;
`

class BottomTab extends Component {
  state = {
    selectedTab: 'home',
  }

  render() {
    return (
      <BottomTab>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          tabBarPosition="bottom"
        >
          <TabBar.Item
            icon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${home})`,
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${home}) #00FFFF`,
                }}
              />
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              })
            }}
          />
          <TabBar.Item
            icon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${buddy})`,
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${buddy}) #00FFFF`,
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
                  background: `url(${update})`,
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${update}) #00FFFF`,
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
                  background: `url(${talk})`,
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${talk}) #00FFFF`,
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
                  background: `url(${profile})`,
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${profile}) #00FFFF`,
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
    )
  }
}

export default BottomTab
