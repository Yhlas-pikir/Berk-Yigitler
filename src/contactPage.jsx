import React from 'react'
import Navbar from './components/Navbar/Navbar'
import MapEmail from './components_contact/MapEmail/MapEmail'
import Aboutus from './components/Aboutus/Aboutus'

function ContactPage() {
  return (
    <div style={{display:'flex', flexDirection:"column",minHeight: "100vh"}}>
        <Navbar />
        <MapEmail />
        <Aboutus/>
    </div>
  )
}

export default ContactPage