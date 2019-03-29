import React, { Component } from 'react'
// import logo from './logo.svg';
import { TabBar, NavBar, Icon } from 'antd-mobile'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import './App.css'
import 'antd-mobile/dist/antd-mobile.css'
import BottomTab from './components/BottomTab'
import UpdateStep1 from './pages/update-step-1'
import { Routes } from './routes'

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
`

class App extends Component {
  state = {
    selectedTab: 'redTab',
  }

  render() {
    return (
      <Router>
        <div className="App">
          <HeaderWrapper>
            <NavBar
              mode="light"
              // icon={<Icon type="left" />}
              // onLeftClick={() => console.log('onLeftClick')}
            >
              NavBar
            </NavBar>
          </HeaderWrapper>

          {Routes}

          <BottomTab />
        </div>
      </Router>
    )
  }
}

export default App
