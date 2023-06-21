import { Chip } from '@mui/material'
import React from 'react'
import './WorkHistory.css'

export default function WorkHistory() {
    return (
        <div className="workHistory-container">
            <div className='workHistory-parrent'>
                <div className="work-details">

                    <div>

                        <div className='compony-name'>
                            <h6 className='orange-text'><i className='fa fa-circle mr-2 '></i> <b>Nuvio Technology Private Limited<br/><small className='ml-4'>Full stack java developer</small></b></h6>
                            <Chip sx={{ bgcolor: '#FF5823', color: 'var(--white)' }} label="2022-Present" />
                        </div>
                        <div className='mt-3 text-muted'>
                            <p>design back-end architecture using multiple technologies.</p>

                               <p> build front-end technologies to create user interfaces using <span class="text-dark"><b>Reactjs</b></span>.</p>

                                <p>build flexible applications and websites as per client and end-user preferences.</p>

                                <p><b>create an API</b> based on the application using <span class="text-dark"><b>spring boot</b></span> .</p>

                                <p>create strong databases and servers that can work without any disruption.</p>

                                <p>collaborate with other departments, clients and professionals to integrate the software with other applications.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
