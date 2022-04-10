import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
export default function Navbar (props) {
  const cursorPointer = {
    cursor: 'pointer'
  }
  const activeHomeHandler = (event) => {
 
    document.querySelector('#home').classList.add('active');
    document.querySelector('#about').classList.remove('active')
  }
  const activeAboutHandler = () => {
    document.querySelector('#home').classList.remove('active')
    document.querySelector('#about').classList.add('active')
  }
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            {props.websiteTitle}
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link
                  className='nav-link'
                  id='home'
                  onClick={activeHomeHandler}
                  aria-current='page'
                  to='/'
                >
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link'   id='about' onClick={activeAboutHandler} to='/about'>
                  {props.aboutSection}
                </Link>
              </li>
            </ul>
            <div className='form-check form-switch'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
                id='flexSwitchCheckDefault'
                onClick={props.onModeChange}
              />
              <label
                className={`form-check-label text-${
                  props.mode === 'light' ? 'dark' : 'light'
                }`}
                htmlFor='flexSwitchCheckDefault'
              >
                {props.modeBtnText}
              </label>
            </div>
            <div
              className='blue p-3  bg-primary border border-primary ms-2 rounded-circle d'
              onClick={props.showDarkModeColor.blueColor}
              style={cursorPointer}
            />
            <div
              className='red p-3  bg-danger border border-danger mx-2 rounded-circle d'
              onClick={props.showDarkModeColor.redColor}
              style={cursorPointer}
            />
            <div
              className='green p-3  bg-success border border-success me-2 rounded-circle d'
              onClick={props.showDarkModeColor.greenColor}
              style={cursorPointer}
            />
            <div
              className='yellow p-3  bg-warning border border-warning rounded-circle d'
              onClick={props.showDarkModeColor.yellowColor}
              style={cursorPointer}
            />
          </div>
        </div>
      </nav>
    </>
  )
}
Navbar.propTypes = {
  websiteTitle: PropTypes.string.isRequired,
  aboutSection: PropTypes.string.isRequired
}
// Navbar.defaultProps = {
//   websiteTitle: 'Logo',
//   aboutSection: 'About Us'
// }
