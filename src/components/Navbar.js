import React from 'react'
import styled from 'styled-components'
import { NavBar } from 'antd-mobile'

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`

const Navbar = props => {
  return (
    <HeaderWrapper>
      <NavBar
        mode="light"
        // icon={<Icon type="left" />}
        // onLeftClick={() => console.log('onLeftClick')}
        {...props}
      >
        {props.children}
      </NavBar>
    </HeaderWrapper>
  )
}

export default Navbar
