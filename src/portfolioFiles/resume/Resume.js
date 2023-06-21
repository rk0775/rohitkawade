import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Resume.css'
import Education from './Education/Education';
import WorkHistory from './WorkHistory/WorkHistory';
import Skills from './Skills/Skills';
import GitStatus from './GitHub/GitStatus';
import Project from './Project/Project';
import Certificates from './certificates/Certificates';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


export default function Resume() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='resume-container'>
            <div className="resume-parrent d-none d-md-block">
                <Box
                    sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 400 }}
                >
                    <Tabs
                        orientation="vertical"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        className='tabs-disign'
                        sx={{ borderRight: 1, borderColor: 'divider' }}
                    >
                        <Tab className='github' label="GitHub Status" {...a11yProps(0)} />
                        <Tab label="Education" {...a11yProps(1)} />
                        <Tab label="Work History" {...a11yProps(2)} />
                        <Tab label="Skills" {...a11yProps(3)} />
                        <Tab label="Projects" {...a11yProps(4)} />
                        <Tab label="Certificates" {...a11yProps(5)} />

                    </Tabs>
                    <div className='panels'>
                    <TabPanel value={value} index={0}>
                        <GitStatus />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Education />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <WorkHistory />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Skills />
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <Project/>
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        <Certificates/>
                    </TabPanel>
                    </div>
                </Box>
            </div>
            <div className='mobile-responsive d-block d-md-none'>

                <h3 className='second-label'><b>Education</b></h3>
                <div className='divder'></div>
                <Education/>
                <h3 className='second-label'><b>Experience</b></h3>
                <div className='divder'></div>
                <WorkHistory/>
                <h3 className='second-label'><b>Projects</b></h3>
                <div className='divder'></div>
                <Project/>
                <h3 className='second-label'><b>Skills</b></h3>
                <div className='divder'></div>
                <Skills/>
                <h3 className='second-label'><b>Certificates</b></h3>
                <div className='divder'></div>
                <Certificates/>

            </div>
        </div>
    )
}
