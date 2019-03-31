import React, { useEffect } from 'react'
import firebase from 'firebase'

const Home = () => {
  useEffect(() => {
    const isAuth = async () => {
      const user = await firebase.auth().currentUser
      console.log(user)

      setTimeout(() => console.log(user), 9000)

      if (user) {
        console.log('SIGN IN')
      } else {
        console.log('NOT SIGN IN')
      }
    }

    isAuth()
  }, [])

  return <div>Home-Works</div>
}

export default Home
