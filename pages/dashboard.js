import dashstyling from '../styles/Dashboard.module.css';
import React from 'react';
import "toastify-js/src/toastify.css";
import AppBar from '../components/appbar'
import PropTypes from 'prop-types';


import GenerateResults from '../pages/newdash'
export default function DashBoard() {


    const [value, setValue] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };





    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <>
                        {children}
                    </>
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
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }




    return (<div className={dashstyling.maindiv} >

        <AppBar />
        <GenerateResults />
        {/* <GenerateResults /> */}


        {/* 
        <Box sx={{ width: '100%', bgcolor: 'trasnparent' }}>
            <Tabs value={value} onChange={handleTabChange} centered>
                <Tab label="Let Us do Everything for you" style={{ color: 'white' }} />
                <Tab label="Select your own Keywords" style={{ color: 'white' }} />
            </Tabs>
        </Box>

        <TabPanel value={value} index={0}>




            <GenrateResult  />



        </TabPanel>
        <TabPanel value={value} index={1}>
            <SelectKeywords value={value} Change={()=>{setValue(0)}}/>
        </TabPanel> */}



    </div>)
}