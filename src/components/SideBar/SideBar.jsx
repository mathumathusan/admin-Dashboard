import React from "react";
import "./SideBar.css";
import {

  WorkOutline,
  Report,
  ChatBubbleOutline,
  DynamicFeed,
  MailOutline,
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarContent">
          <span className="heading">Dashboard</span>
          <div className="sidebarIcon  " >
          <span>Home</span>
            <Link to={"/"}>
            <LineStyle />
            </Link>
           
          </div>
          <div className="sidebarIcon">
            <span>Analytics</span>
            <Timeline/>
          </div>
          <div className="sidebarIcon">
            <span>Sales</span>
            <TrendingUp />
          </div>
        
        <div className="sidebarContent">
          <span className="heading">Quick Menu</span>
          <div className="sidebarIcon">
            <span>Users</span>
         <Link to={"/users"}>
         <PermIdentity/>
         </Link>   
          </div>
          <div className="sidebarIcon">
            <span>Products</span>
             <Storefront/>
          </div>
          <div className="sidebarIcon">
            <span>Transactions</span>
            <AttachMoney/>
          </div>
          <div className="sidebarIcon">
            <span>Reports</span>
            <BarChart />
          </div>
        </div>
        <div className="sidebarContent">
          <span className="heading">Notifications</span>
          <div className="sidebarIcon">
            <span>Mail</span>
            <MailOutline/>
          </div>
          <div className="sidebarIcon">
            <span>Feedback</span>
            <DynamicFeed />
          </div>
          <div className="sidebarIcon">
            <span>Messages</span>
            <  ChatBubbleOutline/>
          </div>
        </div>
        <div className="sidebarContent">
          <span className="heading">Staff</span>
          <div className="sidebarIcon">
            <span>Manage</span>
            <WorkOutline />
          </div>
          <div className="sidebarIcon">
            <span>Analytics</span>
            <Timeline/>
          </div>
          <div className="sidebarIcon">
            <span>Reports</span>
            <Report />
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default SideBar;
