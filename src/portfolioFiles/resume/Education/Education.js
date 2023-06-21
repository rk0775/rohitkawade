import React from 'react'
import "./Education.css"
import { Chip } from '@mui/material'
export default function Education() {
  return (
    <div className='edu-container'>
      <div className='edu-parrent'>
        <div className='college-info'>
          <div className='college-name'>

            <div className=''>
              <h6 className='orange-text'><i className='fa fa-circle mr-3'></i><b>K.T.H.M college,Nashik</b></h6>
              <h6 className="secondery-text mr-3">Master of Science in Computer Science (MSCS)<br/> <span className="text-muted">persentage: pursuing</span></h6>

            </div>
            <Chip sx={{ bgcolor: '#FF5823', color: 'var(--white)' }} label="2021-2023" />
          </div>
        </div>
        <div className='college-info'>
          
          <div className='college-name'>

            <div>
              <h6 className='orange-text'><i className='fa fa-circle mr-3'></i><b>K.K Wagh college, pimplgaon baswant</b></h6>
              <h6 className="secondery-text mr-3">BSC (Bachelor of Computer Science)<br/> <span className='text-muted'>percentage: 79.94%</span></h6>
            </div>
            <Chip sx={{ bgcolor: '#FF5823', color: 'var(--white)' }} label="2019-2021" />
          </div>
        </div>
        <div className='college-info'>
          <div className='college-name'>

            <div>
              <h6 className='orange-text'><i className='fa fa-circle mr-3'></i><b>B.K. Kawale college</b></h6>
              <h6 className="secondery-text mr-3">This is my school where i completed my basic education (11th-12th).</h6>
            </div>
            <Chip sx={{ bgcolor: '#FF5823', color: 'var(--white)' }} label="2018-2019" />
          </div>
        </div>
      </div>
    </div>
  )
}
