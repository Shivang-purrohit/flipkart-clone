import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GetAppIcon from '@mui/icons-material/GetApp';
import './LoginTippy.css'

const MoreTippy = () => {
  return (
    <div className='moret'>
    <div className='moret__in'>
    <NotificationsIcon/>
    <p>Notification Preferences</p>
    </div><hr />
    <div className='moret__in'>
    <LiveHelpIcon/>
    <p>24x7 Customer Care</p>
    </div><hr />
    <div className='moret__in'>
    <TrendingUpIcon/>
    <p>Advertise</p>
    </div><hr />
    <div className='moret__in'>
    <GetAppIcon/>
    <p>Download App</p>
    </div>
    
    
</div>
  )
}

export default MoreTippy