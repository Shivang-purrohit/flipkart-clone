import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'
import MoreTippy from './MoreTippy';
import LoginTippy from './LoginTippy';


export const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg bgColor ">
  <div className="container-fluid">
    <a className="navbar-brand nav-move sub-nav" href="#"><span className='sub-nav1'>Explore</span><span className='sub-nav2'>Plus</span>

 <img width="75" className='main-icon' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png'/> 
 <img width="10" className='sub-nav-icon'  src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png'/>
 </a>
    
    
    <form className="d-flex nav-move" role="search">
        <input className="form-control me-2 width-search " type="search" placeholder="Search for products, brands and more" aria-label="Search"/><i className="fa-solid search-icon fa-magnifying-glass"></i>
         </form>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">

        <li className="nav-item navCompo">
          <Tippy content={<LoginTippy/>}
          interactive={true}
          theme="light"
          offset={[5,13]}>
          <button className='navLoginbtn'>Login</button>
          </Tippy>
        </li>

        <li className="nav-item navCompo">
        <a className="nav-link become  color1 space " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Become a seller
          </a>
          
        </li>
     

        </li>
          <li className="nav-item dropdown navCompo">
          <Tippy
          content={<MoreTippy/>}
          interactive={true}
          theme="light"
          offset={[5,18]}
          >
          <p className="color1 space move" >
           More <KeyboardArrowDownIcon/> </p> 
           </Tippy>
        </li>
        <li className="nav-item navCompo">
          <a className="nav-link color1" href="#"><i class="fa-solid cart-icon fa-cart-shopping"></i>Cart</a>
        </li>
        
      </ul>
      
      
    </div>
  </div>
</nav>
</>

  )
}
