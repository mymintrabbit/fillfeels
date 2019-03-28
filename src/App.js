import React, { Component } from 'react'
// import logo from './logo.svg';
import { TabBar, NavBar, Icon } from 'antd-mobile'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import './App.css'
import 'antd-mobile/dist/antd-mobile.css'
import BottomTab from './components/BottomTab'
import update from './assets/update.svg'
import profile from './assets/profile.svg'
import talk from './assets/talk.svg'
import home from './assets/home.svg'
import buddy from './assets/buddy.svg'
import UpdateStep1 from './pages/update-step-1'

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
        <Route path="/" exact component={UpdateStep1} />
        <Route path="/update/" component={UpdateStep1} />
        <Route path="/buddy/" component={UpdateStep1} />
        <Route path="/talk/" component={UpdateStep1} />
        <Route path="/profile/" component={UpdateStep1} />

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

          <UpdateStep1 />

          <BottomTab />
        </div>
      </Router>
    )
  }
}

export default App
