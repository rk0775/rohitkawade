import React, { useRef } from 'react'
import './ContactMe.css'
import { TextField } from '@mui/material';

export default function ContactMe() {

  return (
    <div className='contactme-container'>
      <div className='contactme-parrent'>
        <div className='heading-section'>
          <h2><b>Get In Touch</b></h2>
          <div className='colz'>
            <div className='colz-icon'>

              <a href="https://github.com/rk0775" target='_blank'><i className='fa fa-github'></i></a>
              <a href="https://www.linkedin.com/in/rohit-kawade-ab7a91256" target='_blank'><i className='fa fa-linkedin'></i></a>
            </div>
          </div>
        </div>
        <div className='email-section' id="contact-component">


          <div className='email-r'>
            <small>Send Your Email Here!</small>
            <div className='email-img'>

            </div>
          </div>

          <div className='conatctme-box'>
            <form action="https://formsubmit.co/f4cc311cbedf23b3c458430b8ec6af54" method="POST">

              <TextField name="name" fullWidth type="text" id="standard-basic" label="Name" variant="standard" /><br />

              <TextField name="email" className='mt-4' fullWidth type="email" id="standard-basic" label="Email" variant="standard" /><br />

              <TextField
                className='mt-4'
                fullWidth
                id="outlined-multiline-static"
                name="message"
                label="Message"
                multiline
                rows={4}
                defaultValue=""
              /><br />
              <button className='mt-2 btn primary-btn' type="submit" >Send <i class="fa ml-2 fa-paper-plane" style={{ color: "var(--orange)" }}></i></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
