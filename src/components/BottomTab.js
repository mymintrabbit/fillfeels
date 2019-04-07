import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import styled from 'styled-components'
import 'antd-mobile/dist/antd-mobile.css'
import update from '../assets/update.svg'
import profile from '../assets/profile.svg'
import talk from '../assets/talk.svg'
import home from '../assets/home.svg'
import buddy from '../assets/buddy.svg'
import { pathRoutes } from '../routes'

const BottomWrapper = styled.div`
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
  z-index: 100;
`

class BottomTab extends Component {
  state = {
    selectedTab: 'home',
  }

  onChangeTab = tab => {
    this.setState({ selectedTab: tab })
    this.props.history.push(tab)
  }

  render() {
    const routeTabs = { ...pathRoutes }

    if (this.props.location.pathName === '/login') {
      return null
    }

    return (
      <BottomWrapper>
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
            selected={this.state.selectedTab === routeTabs.Home.path}
            onPress={() => {
              this.onChangeTab(routeTabs.Home.path)
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
            selected={this.state.selectedTab === routeTabs.Buddy.path}
            onPress={() => {
              this.onChangeTab(routeTabs.Buddy.path)
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
            selected={this.state.selectedTab === routeTabs.UpdateStepOne.path}
            onPress={() => {
              this.onChangeTab(routeTabs.UpdateStepOne.path)
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
            selected={this.state.selectedTab === routeTabs.Talk.path}
            onPress={() => {
              this.onChangeTab(routeTabs.Talk.path)
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
            selected={this.state.selectedTab === routeTabs.Profile.path}
            onPress={() => {
              this.onChangeTab(routeTabs.Profile.path)
            }}
          />
        </TabBar>
      </BottomWrapper>
    )
  }
}

export default withRouter(BottomTab)
