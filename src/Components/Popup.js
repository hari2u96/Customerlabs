import React from 'react'
import "./Popup.css"
import { IoIosArrowBack } from "react-icons/io";
import Schema from "./schema";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Popup({ setPopOpen }) {
  return (
    <div>
      <div className='container'>
        <div className='box'>
          <div className='header'>
            Saving Segment
       
            <IoIosArrowBack className='x' onClick={() => { setPopOpen(false) }} />
          </div>
          <h1 className='enter'>Enter the name of segment</h1>
          <input type="text" placeholder='Name of the Segment' className='name'></input>
          <p className='tosave'>To save your segment,you need to add to schemas to build a query</p>
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Add Schema to Segment</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Schema></Schema>
              </AccordionDetails>
            </Accordion>
            </div>
            <div className='bttn'>
              <button className='savebtn'>Save the segment</button>
              <button onClick={() => { setPopOpen(false) }} className='cancel'>cancel</button>
            </div>
          </div>
        </div>

      </div>
      )
}

      export default Popup