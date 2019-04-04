import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { SearchBar, Icon, Modal } from 'antd-mobile'
import update from '../assets/update.svg'
import close from '../assets/close.svg'

const Wrapper = styled.div`
  width: 100%;
  margin-top: 60px;
  flex: 1;
  justify-content: flex-start;
`

const SearchWrapper = styled.div`
  .am-search {
    background-color: white;
    padding: 0% 5%;
  }
  .am-search-input {
    border: 1px solid lightgray;
    border-radius: 20px;
    height: 40px;
    align-items: center;
  }
  .am-search-input .am-search-synthetic-ph {
    height: 40px;
    line-height: 40px;
  }
  .am-search-input input[type='search'] {
    height: 40px;
  }
  .am-search-input .am-search-clear {
    width: 25px;
    height: 25px;
  }
`

const ListWrapper = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0% 5%;
  margin-top: 25px;
`

const ModalWrapper = styled.div``

const Avatar = styled.img`
  display: block;
  width: ${props => props.size || 50}px;
  height: ${props => props.size || 50}px;
  border-radius: 50%;
  background-size: cover;
  margin: 0 auto;
`

const MyIcon = styled.img`
  width: ${props => props.size || 22}px;
  height: ${props => props.size || 22}px;
`

const BuddyBox = styled.div`
  border-radius: 20px;
  border: 1px solid lightgray;
  margin: 40px 5%;
  padding: 35px 25px;
  height: 250px;
  justify-content: center;
  align-items: center;
`

const AddBuddyBox = styled.div`
  border-radius: 20px;
  border: 1px solid black;
  margin: 30px 5%;
  height: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  display: flex;
`

function closest(el, selector) {
  const matchesSelector =
    el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el
    }
    el = el.parentElement
  }
  return null
}

class Buddy extends React.Component {
  state = {
    value: '',
    modal: false,
    isShowBuddyBox: false,
    buddies: [
      {
        id: 1,
        name: 'mymint',
        photo: 'http://lorempixel.com/100/100/',
        friend: true,
      },
      {
        id: 2,
        name: 'moon',
        photo: 'http://lorempixel.com/100/100/',
        friend: false,
      },
    ],
    selectedBuddy: {},
  }
  onChange = value => {
    this.setState({ value })
  }

  showModal = key => {
    console.log('click')
    //e.preventDefault() // Android
    this.setState({
      [key]: true,
    })
  }

  onClose = key => () => {
    this.setState({
      [key]: false,
    })
  }

  onWrapTouchStart = e => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return
    }
    const pNode = closest(e.target, '.am-modal-content')
    if (!pNode) {
      e.preventDefault()
    }
  }

  triggerBuddyBox = buddy => {
    this.setState({ isShowBuddyBox: !this.state.isShowBuddyBox, selectedBuddy: buddy })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar>Buddies</Navbar>
        <Wrapper>
          <SearchWrapper>
            <SearchBar
              value={this.state.value}
              placeholder="Search"
              cancelText="cancel"
              // onSubmit={value => console.log(value, 'onSubmit')}
              // onClear={value => console.log(value, 'onClear')}
              // onFocus={() => console.log('onFocus')}
              // onBlur={() => console.log('onBlur')}
              // onCancel={() => console.log('onCancel')}
              onChange={this.onChange}
            />
          </SearchWrapper>

          {!this.state.isShowBuddyBox ? (
            this.state.buddies.map(buddy => (
              <ListWrapper onClick={() => this.triggerBuddyBox(buddy)}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <Avatar src={`${buddy.photo}`} />
                  <div style={{ marginLeft: 15 }}>{buddy.name}</div>
                </div>
                {buddy.friend ? (
                  <Icon
                    type="ellipsis"
                    size="sm"
                    onClick={e => {
                      e.stopPropagation()
                      this.showModal('modal')
                    }}
                  />
                ) : null}
              </ListWrapper>
            ))
          ) : (
            <BuddyBox>
              <Avatar src={`${this.state.selectedBuddy.photo}`} size={100} />
              <div style={{ marginTop: 15 }}>{this.state.selectedBuddy.name}</div>
              {this.state.selectedBuddy.friend ? (
                <AddBuddyBox>
                  <MyIcon src={update} />
                  <div style={{ marginLeft: 15 }}>Make a buddy</div>
                </AddBuddyBox>
              ) : (
                <div style={{ margin: 37, color: 'blue' }}>Already friend</div>
              )}

              <MyIcon src={close} size={18} onClick={() => this.triggerBuddyBox({})} />
            </BuddyBox>
          )}

          <ModalWrapper>
            <Modal
              visible={this.state.modal}
              transparent
              maskClosable={false}
              onClose={this.onClose('modal')}
              footer={[
                {
                  text: 'Cancel',
                  onPress: () => {
                    console.log('cancel')
                    this.onClose('modal')()
                  },
                },
                {
                  text: 'Ok',
                  onPress: () => {
                    console.log('ok')
                    this.onClose('modal')()
                  },
                },
              ]}
              wrapProps={{ onTouchStart: this.onWrapTouchStart }}
            >
              <div style={{ minheight: 100, padding: 10 }}>
                <Avatar src="http://lorempixel.com/100/100/" size={100} />
                <div style={{ marginTop: 15 }}>Remove from buddies?</div>
              </div>
            </Modal>
          </ModalWrapper>
        </Wrapper>
      </React.Fragment>
    )
  }
}

export default Buddy
