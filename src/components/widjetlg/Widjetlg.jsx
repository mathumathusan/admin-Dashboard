import React from 'react'
import "./Widjetlg.css"

function Widjetlg() {

    const Button = ({ type }) => {
        return <button className={`button ${type}`}>{type}</button>;
    };
    


  return (
    <div className='widjetlg'>
        <h1 className="topheading">
            latest transactions
        </h1>
        <table className="table">
            <tr className="tablerowhead">
                <th className="theading">Customer</th>
                <th className="theading">Date</th>
                <th className="theading">Amount</th>
                <th className="theading">Status</th>
            </tr>
            <tr className="tablerowbody">
               <td className="data">
                <img src="https://media.licdn.com/dms/image/D5635AQG2g-s8ccQ2-A/profile-framedphoto-shrink_400_400/0/1694248383684?e=1706518800&v=beta&t=tNPyHCivWih8dLuhTdd1fVyMnjbWigJ_53HFv2iqdpU" 
                alt="kisho" />
                <span className='profilename'>Thasi </span>
               </td>
               <td className="date">22 jan 2024</td>
               <td className="amount">2500/=</td>
               <td className="status">
                <Button type={"Approved"} />
                </td>
            </tr>
            <tr className="tablerowbody">
               <td className="data">
                <img src="https://media.licdn.com/dms/image/D5635AQF43KJYzhZg7w/profile-framedphoto-shrink_400_400/0/1694451355353?e=1706515200&v=beta&t=qTATPH1XE_PwFZV-m2wuprQyLbkjK5HGtruQQZVfB3s" 
                alt="kisho" />
                <span className='profilename'>kisho vimal</span>
               </td>
               <td className="date">22 jan 2024</td>
               <td className="amount">2500/=</td>
               <td className="status">
                <Button type={"Pending"} />
                </td>
            </tr>
            <tr className="tablerowbody">
               <td className="data">
                <img src="https://media.licdn.com/dms/image/D5635AQFM9KWvs10pYg/profile-framedphoto-shrink_400_400/0/1694167913427?e=1706518800&v=beta&t=L2zAR13D0KC_RUf32khC20h5WEuiWjcuKYmlevLasyE" 
                alt="kisho" />
                <span className='profilename'>tharani</span>
               </td>
               <td className="date">22 jan 2024</td>
               <td className="amount">2500/=</td>
               <td className="status">
                <Button type={"Approved"} />
                </td>
            </tr>
            <tr className="tablerowbody">
               <td className="data">
                <img src="https://media.licdn.com/dms/image/D5635AQF43KJYzhZg7w/profile-framedphoto-shrink_400_400/0/1694451355353?e=1706515200&v=beta&t=qTATPH1XE_PwFZV-m2wuprQyLbkjK5HGtruQQZVfB3s" 
                alt="kisho" />
                <span className='profilename'>kisho vimal</span>
               </td>
               <td className="date">22 jan 2024</td>
               <td className="amount">2500/=</td>
               <td className="status">
                <Button type={"Pending"} />
                </td>
            </tr>
            <tr className="tablerowbody">
               <td className="data">
                <img src="https://media.licdn.com/dms/image/D5635AQF43KJYzhZg7w/profile-framedphoto-shrink_400_400/0/1694451355353?e=1706515200&v=beta&t=qTATPH1XE_PwFZV-m2wuprQyLbkjK5HGtruQQZVfB3s" 
                alt="kisho" />
                <span className='profilename'>kisho vimal</span>
               </td>
               <td className="date">22 jan 2024</td>
               <td className="amount">2500/=</td>
               <td className="status">
                <Button type={"Declined"} />
                </td>
            </tr>
        </table>
        
    </div>
  )
}

export default Widjetlg