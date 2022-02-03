// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/footer.css';
import { MdOutlineFoodBank } from 'react-icons/md'
import { FiBell } from 'react-icons/fi'
import { BiHome } from "react-icons/bi";


const footer = () => {
  const activeStyle = {
    color: 'green'
  }
  return(
    <div className="footer">
      <div className='icoFlax'>
          <NavLink exact to="/" activeStyle={activeStyle} className="navbar-home">
            <BiHome size='40' color='#22a7f2'/>
          </NavLink>

        <NavLink exact to="/food" activeStyle={activeStyle} className="navbar-food">
          <MdOutlineFoodBank size='40' color='#36d128'/>
        </NavLink>

        <NavLink exact to="/notice" activeStyle={activeStyle} className="navbar-notice">            
          <FiBell size='40' color='#eb9021'/>
        </NavLink>          
            
      </div>
        <p className='copyRight'>©2022 - GBSW High School</p>
    </div>
  )
}
export default footer