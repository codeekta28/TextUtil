import * as React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import react, { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import About from './components/About'

function App () {
  const [mode, setMode] = useState('light')
  const [modeBtnText, setModeBtnText] = useState('Dark Mode')
  const [alert, setAlert] = useState(null)
  const [darkModeColor, setDarkModeColor] = useState('white')
  const modeChangeHandler = () => {
    if (mode === 'light') {
      setMode('dark')
      setModeBtnText('Light Mode')
      document.body.style.backgroundColor = '#151515'
      document.body.style.color = 'white'
      // document.title = 'TextUtil-darkmodeOn'
      //  below code can br written to make  title blinking but not a good user experience
      // setInterval(() => {
      //   document.title="TextUtil-Download now"
      // }, 1000);
      // setInterval(() => {
      //   document.title="TextUtil is a good app"
      // }, 1500);
      setDarkModeColor('#151515')
      showAlert('success', 'Dark Mode On')
    } else {
      setMode('light')
      setModeBtnText('Dark Mode')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      // document.title = 'TextUtil-LightMode'
      setDarkModeColor('black')
      showAlert('success', 'Light Mode On')
    }
  }
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  const showDarkModeColor = {
    blueColor: () => {
      if (mode === 'dark') {
        document.body.style.backgroundColor = '#061d3e'
        setDarkModeColor('#0a4dac')
      }
    },
    redColor: () => {
      if (mode === 'dark') {
        document.body.style.backgroundColor = '#521616'
        setDarkModeColor('#ba1818')
      }
    },
    greenColor: () => {
      if (mode === 'dark') {
        document.body.style.backgroundColor = '#063606'
        setDarkModeColor('#0cae0c')
      }
    },
    yellowColor: () => {
      if (mode === 'dark') {
        document.body.style.backgroundColor = '#ce9d08'
        setDarkModeColor('#f4c430')
      }
    }
  }

  return (
    <>
      <Navbar
        websiteTitle={'TextUtiles'}
        aboutSection={'About'}
        mode={mode}
        onModeChange={modeChangeHandler}
        modeBtnText={modeBtnText}
        showDarkModeColor={showDarkModeColor}
      />
      <Alert showAlert={alert} />

      <Routes>
        <Route
          path='/'
          element={
            <TextForm
              heading={
                'Try Text Utilities->Word Counter,Char Counter,UpperCase,LowerCase,Capitalize,Parameterize,Remove Extra Space '
              }
              mode={mode}
              showAlert={showAlert}
              darkModeColor={darkModeColor}
            />
          }
        />
        <Route
          path='about'
          element={<About darkModeColor={darkModeColor} mode={mode} />}
        />
      </Routes>
    </>
  )
}

export default App
