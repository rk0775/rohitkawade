import React from 'react'
import './Footer.css'
import { Chip } from '@mui/material'
import { Link } from 'react-scroll'
export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-parrent'>
                <div className='footer-info'>Written & Coded by Rohit Kawade
                    <div className='social-icon'>
                        <a href="https://github.com/rk0775" target='_blank'><i className='fa fa-github'></i></a>
                        <a href="https://www.linkedin.com/in/rohit-kawade-ab7a91256" target='_blank'><i className='fa fa-linkedin'></i></a>
                    </div>
                </div>
                <Link smooth spy to="home-component">
                    <i className='fa fa-arrow-up'></i>
                </Link>
            </div>
        </div>
    )
}
