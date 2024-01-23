import React from 'react'
import "./Home.css"
import Card from '../../components/card/Card'
import Chart from '../../components/chart/Chart'
import {userdata} from '../../dummyData.js'
import Widjetsm from '../../components/widjetsm/Widjetsm.jsx'
import Widjetlg from '../../components/widjetlg/Widjetlg.jsx'

function Home() {
  return (
    <div className='home'>
      
      <Card  />
      <Chart data={userdata} title="user details" grid datakey="activeuser"/>
       <div className='widjet'>
        <Widjetsm/>
        <Widjetlg/>
       </div>
    
     </div>
  )
}

export default Home