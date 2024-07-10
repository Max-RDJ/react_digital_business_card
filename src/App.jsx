import { useState } from 'react'
import './App.css'
import profilePic from '../images/cropped_profile_pic.png'
import Footer from "./footer.jsx"

function App() {
  return (
  <main>
    <div id="top-section">
      <img src={profilePic} id="profile-pic"/>

      <h1>Max Jeremiah</h1>
      <h2 className='job-title'>React Developer</h2>
      <a href="mailto:no-reply@example.com"><button>  Email</button></a>
      <a href="https://github.com/Max-RDJ" target="_blank"><button label="Contact me on LinkedIn" src="">GitHub</button></a>
      </div>

    <div id="bottom-section" >
      <h3>
        About
      </h3>
      <p className="about">
        Hello! My name is Max and I'm a translator-turned-software developer. I have a solid foundation in HTML, CSS, Javascript and React. Thanks to my experience running my own translation and proofreading business, I am a strong writer and communicator, making any team more dynamic.
      </p>
      <h3>
        Interests
      </h3>
      <p className='interests'>
        Table tennis, playing bass in my hardcore band, working out at the gym and going to language exchange groups.
      </p>
      <Footer />
    </div>
  </main>
  )
}

export default App