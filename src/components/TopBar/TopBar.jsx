import React from 'react'
import "./TopBar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
function TopBar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className='logo'>mathu admin</span>
                </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                 <NotificationsNoneIcon/>
                 <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                 <LanguageIcon/>
                 <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                 <SettingsIcon/>
                </div>
                <img src="https://i.pinimg.com/736x/ef/37/25/ef3725216d5aee27168aa775207716ad.jpg" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

export default TopBar