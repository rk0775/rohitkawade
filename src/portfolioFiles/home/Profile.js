import React from 'react'
import './Profile.css'
import Typical from 'react-typical'
import { Link } from 'react-scroll'
export default function Profile() {
    return (
        <div className="profile-container mt-5" id="home-component">
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>

                            <a href="https://github.com/rk0775" target='_blank'><i className='fa fa-github'></i></a>
                            <a href="https://www.linkedin.com/in/rohit-kawade-ab7a91256" target='_blank'><i className='fa fa-linkedin'></i></a>
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'M <span className='highlighted-text'>Rohit</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        {" "}
                        <h1>
                            {" "}
                            <Typical
                                steps={[
                                    'Java Developer',
                                    1000,
                                    'Full Stack Developer',
                                    1000,
                                    'Full Stack Java Developer',
                                    1000,
                                    'Web Developer',
                                    1000,
                                    'Backend Developer',
                                    1000]}
                                loop={Infinity}

                            />

                        </h1>
                        <span className='profile-role-tagline'>
                            Knack of building applications with front and back end operations.
                        </span>
                    </div>
                    <div className='profile-options'>

                        <Link className='btn primary-btn' smooth spy to="contact-component">
                            Hire me
                        </Link>
                        <a href='resume.pdf' download="rohit kawade resume.pdf">
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>

                <div className='profile-picture'>
                    <div className='profile-picture-backgound'></div>
                </div>
            </div>
        </div>
    )
}
