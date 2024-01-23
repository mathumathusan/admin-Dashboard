import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./Chart.css"
function Chart({data,title,grid,datakey}) {

 
  return (
    <div className='chartContainer'>

     <span className='title'> {title}</span>

     <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
         {grid &&  <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey={datakey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="activeuser" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart