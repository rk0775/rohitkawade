import React from 'react'
import './AboutMe.css'
import { Link } from 'react-scroll'
export default function AboutMe() {
    return (
        <div className='aboutme-container'>

            <div className='aboutme-parent '>
                <div className="img-div">
                    <div className='img-bg'></div>

                </div>
                <div className='info-div'>
                    <div className='about-me text-justify '>
                        For the past one year, I’ve been working on backend development. I take an evaluative approach to solving issues and work through the process by trying out various solutions. I’m a self-starter and work well independently, but I’m also skilled at working in teams. I’m used to working in fast-paced environments and am very driven by goals and deadlines.. My experience includes developing websites. I am skilled in Java, Springboot, Hibernate. Tomcat Apache, JavaScript, ReactJs, CSS, MySql, HTML, Bootstrap, and more.

                    </div>
                    <div className='highlights'>
                        <h5>Here are a few highlights : </h5>
                        <div className='highlight'>
                            <i class="fa fa-circle"></i>
                            <span>Web development</span>
                        </div>
                        <div className='highlight'>
                            <i class="fa fa-circle"></i>
                            <span>Java development</span>
                        </div>
                        <div className='highlight'>
                            <i class="fa fa-circle"></i>
                            <span>Java programer</span>
                        </div>
                        <div className='highlight'>
                            <i class="fa fa-circle"></i>
                            <span>Full stack java development</span>
                        </div>
                    </div>
                    <div className='aboutme-options '>
                        <Link className='btn primary-btn text-light' smooth spy to="contact-component">
                            Hire me
                        </Link>
                        <a href='resume.pdf' download="rohit kawade resume.pdf">
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
