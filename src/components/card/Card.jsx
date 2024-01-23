import React from 'react'
import "./Card.css"
import { ArrowDownward } from '@mui/icons-material'

function Card() {
  return (
        <div className="cardcontainer">
          <div className="card">
            <div className="cardtop">
           <span className="head">Revenue</span>
            </div>
            <div className="cardcenter">
             <span className='price'>$2415</span>
             <span  >-11.4</span>
             <ArrowDownward className='negative'/>
            </div>
            <div className="cardbottom">
            <span>compared to last month</span>
            </div>
          </div>
          <div className="card">
            <div className="cardtop">
           <span className="head">Revenue</span>
            </div>
            <div className="cardcenter">
             <span className='price'>$2415</span>
             <span  >-11.4</span>
             <ArrowDownward className='negative'/>
            </div>
            <div className="cardbottom">
            <span>compared to last month</span>
            </div>
          </div>
          <div className="card">
            <div className="cardtop">
           <span className="head">Revenue</span>
            </div>
            <div className="cardcenter">
             <span className='price'>$2415</span>
             <span  >-11.4</span>
             <ArrowDownward className='negative'/>
            </div>
            <div className="cardbottom">
            <span>compared to last month</span>
            </div>
          </div>
        </div>
  )
}

export default Card