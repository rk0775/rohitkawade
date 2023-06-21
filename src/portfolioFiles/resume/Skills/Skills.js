import React from 'react'
import './Skills.css'
import { Tooltip } from '@mui/material'
export default function Skills() {
  return (
    <div className="skills-container">
      <div className='row'>

        <div className='col-12 col-md-6'>
          <div className='container'>
            <div className="skill-box">
              <span className="title"><i className='fa fa-circle mr-2'></i>Java</span>
              <Tooltip title="85%" arrow>

                <div className="skill-bar">
                  <span className="skill-per java">

                    <span className="tooltip">85%</span>
                  </span>
                </div>
              </Tooltip>
            </div>
          </div>
        </div>

        <div className='col-12 col-md-6'>

          <div className='container'>
            <div className="skill-box">
              <span className="title"><i className='fa fa-circle mr-2'></i>Spring Boot</span>
              <Tooltip title="68%" arrow>
                <div className="skill-bar">
                  <span className="skill-per springboot">
                    <span className="tooltip">68%</span>
                  </span>
                </div>
              </Tooltip>
            </div>
          </div>
        </div>

        <div className='col-12 col-md-6'>

          <div className='container'>
            <div className="skill-box">
              <span className="title"><i className='fa fa-circle mr-2'></i>Hibernate</span>
              <Tooltip title="70%" arrow>
                <div className="skill-bar">
                  <span className="skill-per hibernate">
                    <span className="tooltip">70%</span>
                  </span>
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6'>

          <div className='container'>
            <div className="skill-box">
              <span className="title"><i className='fa fa-circle mr-2'></i>MySql</span>
              <Tooltip title="60%" arrow>
                <div className="skill-bar">
                  <span className="skill-per mysql">
                    <span className="tooltip">60%</span>
                  </span>
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6'>

          <div className='container'>
            <div className="skill-box">
              <span className="title"><i className='fa fa-circle mr-2'></i>JavaScript</span>
              <Tooltip title="55%" arrow>
                <div className="skill-bar">
                  <span className="skill-per javascript">
                    <span className="tooltip">55%</span>
                  </span>
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6'>

          <div className='container'>
            <div className="skill-box">
              <span className="title"><i className='fa fa-circle mr-2'></i>ReactJs</span>
              <Tooltip title="65%" arrow>
                <div className="skill-bar">
                  <span className="skill-per reactjs">
                    <span className="tooltip">65%</span>
                  </span>
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6'>

          <div className='container'>
            <div className="skill-box">
              <span className="title"><i className='fa fa-circle mr-2'></i>Nodejs</span>
              <Tooltip title="45%" arrow>
                <div className="skill-bar">
                  <span className="skill-per nodejs">
                    <span className="tooltip">45%</span>
                  </span>
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6'>
          <div className='container'>
            <div className="skill-box">
              <span className="title"><i className='fa fa-circle mr-2'></i>BootStrap</span>
              <Tooltip title="90%" arrow>
                <div className="skill-bar">
                  <span className="skill-per bootstrap">
                    <span className="tooltip">90%</span>
                  </span>
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6'>

          <div className='container'>
            <div className="skill-box">
              <span className="title"><i className='fa fa-circle mr-2'></i>HTML</span>
              <Tooltip title="65%" arrow>
                <div className="skill-bar">
                  <span className="skill-per html">
                    <span className="tooltip">65%</span>
                  </span>
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6'>

          <div className='container'>
            <div className="skill-box">
              <span className="title"><i className='fa fa-circle mr-2'></i>CSS</span>
              <Tooltip title="60%" arrow>
                <div className="skill-bar">
                  <span className="skill-per css">
                    <span className="tooltip">60%</span>
                  </span>
                </div>
              </Tooltip>
            </div>
          </div>
        </div>

        <div className='col-12 col-md-6'>


          <div className='container'>
            <div className="skill-box">
              <span className="title"><i className='fa fa-circle mr-2'></i>GitHub</span>
              <Tooltip title="55%" arrow>
              <div className="skill-bar">
                <span className="skill-per github">
                  <span className="tooltip">55%</span>
                </span>
              </div>
              </Tooltip>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
