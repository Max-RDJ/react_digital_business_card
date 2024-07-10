import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import instaLogo from '../images/grey_instagram.png'

export default function Footer() {
    return (
    <>
        <footer>
        <a href="https://www.instagram.com/max_rdj/" target="_blank"><img src={instaLogo} id="insta-logo"/></a>
        </footer>
    </>
    )
}