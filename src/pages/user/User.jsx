import React from "react";
import "./user.css";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";

function User() {
  return (
    <div className="user">
      <div className="userTop">
        <div className="userTopTitle">Edit User</div>
        <button className="useredit">Create</button>
      </div>
      <div className="usercenter">
        <div className="usercenterleft">
          <div className="centertitle">
            <img
              src="https://media.licdn.com/dms/image/D5635AQG2g-s8ccQ2-A/profile-framedphoto-shrink_400_400/0/1694248383684?e=1706518800&v=beta&t=tNPyHCivWih8dLuhTdd1fVyMnjbWigJ_53HFv2iqdpU"
              className="centertitleimg"
              alt=""
            />
            <div className="centerhead">
              <h1>Thasitha thangarasa</h1>
              <span>Software Engineer</span>
            </div>
          </div>
          <div className="centercenter">
            <h1>Account Details</h1>
            <ul>
              <li className="icons">
                <PermIdentity /> <span>thasi@123</span>
              </li>
              <li className="icons">
                <CalendarToday />
                <span>01/23/2024</span>
              </li>
            </ul>
          </div>
          <div className="centerbottom">
            <h1>Contact Details</h1>
            <ul>
              <li className="icons">
                <PhoneAndroid />
                <span>0773150424</span>
              </li>
              <li className="icons">
                <MailOutline /> <span>thasi123@gmail.com</span>
              </li>
              <li className="icons">
                {" "}
                <LocationSearching/>
               <span>jaffna,chankathanai</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="usercenterright">
          <span className="usercenterrighttitle">Edit</span>
          <div className="usercenterrightleft">
          <form action="" className="userform">
            <div className="useritem">
              <label htmlFor="" className="userdetails">Username</label>
              <input type="text" className="userInput" />
            </div>
            <div className="useritem">
              <label htmlFor="" className="userdetails">Fullname</label>
              <input type="text" className="userInput" />
            </div>
            <div className="useritem">
              <label htmlFor="" className="userdetails">Email</label>
              <input type="text" className="userInput" />
            </div>
            <div className="useritem">
              <label htmlFor="" className="userdetails">Phone</label>
              <input type="text" className="userInput" />
            </div>
            <div className="useritem">
              <label htmlFor="" className="userdetails">Address</label>
              <input type="text" className="userInput" />
            </div>
          </form>
          <div className="usercenterrightright">
           <div className="usercenterrighttop">
            <img className="usercenterrighttopprofile" src="https://media.licdn.com/dms/image/D5635AQG2g-s8ccQ2-A/profile-framedphoto-shrink_400_400/0/1694248383684?e=1706518800&v=beta&t=tNPyHCivWih8dLuhTdd1fVyMnjbWigJ_53HFv2iqdpU" alt="thasi" />
           <Publish className="usercenterrightprofileicon"/>
           </div>
           <div className="usercenterrightbottom">
            <button className="userrightbutton">
              <span className="update">Update</span>
            </button>
           </div>
          </div>
          </div>
      
        </div>
      </div>
    </div>
  );
}

export default User;
