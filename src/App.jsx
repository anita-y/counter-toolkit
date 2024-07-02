import { useContext, useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import DisplayCounter from './components/DisplayCounter'
import Container from './components/Container'
import Control from './components/Control'
import { useSelector } from 'react-redux'
import PrivacyMessage from './components/PrivacyMessage'

function App() {
  const privacy = useSelector(store => store.privacy)

  return (
      <div className="px-4 py-5 my-5 text-center">
        <Container>
          <Header> </Header>
          <h1 className="display-5 fw-bold text-body-emphasis">Centered hero</h1>
          <div className="col-lg-6 mx-auto">
            { privacy ? <PrivacyMessage/>  : <DisplayCounter/>}
            <Control />
          </div>
        </Container>
      </div>
  
  )
}

export default App
