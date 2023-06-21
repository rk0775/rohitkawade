import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
export default function Navbar() {
    return (
        <div className='navbar-container'>
            <nav class="navbar navbar-expand-sm fixed-top navbar-dark">

                <a class="navbar-brand mt-1" href="/"><b className='logo-fl'>R</b><span className='logo-rl'>ohit Kawade</span><i className='fa fa-circle logo-dot'></i></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <Link  className='nav-link' smooth spy to="home-component">
                                Home
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link className='nav-link' smooth spy to="about-component">
                                About
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link className='nav-link'  smooth spy to="resume-component">
                                Resume
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link className='nav-link' smooth spy to="contact-component">
                                Contact
                            </Link>
                        </li>

                    </ul>

                </div>

            </nav>
        </div>
    )
}
