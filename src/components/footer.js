// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/footer.css';
import { MdOutlineFoodBank } from 'react-icons/md'


const footer = () => {
  const activeStyle = {
    color: 'green'
  }
  return(
    <div className="footer">
      <div className='icoFlax'>
        <div  className="navbar-home">
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
        </div>

        <NavLink exact to="/food" activeStyle={activeStyle} className="navbar-food">
          <MdOutlineFoodBank size='24'/>
          <lable>Food</lable>
        </NavLink>

        <div className="navbar-notice">
          <NavLink exact to="/notice" activeStyle={activeStyle}>Notice</NavLink>          
        </div>    
      </div>
      <p className='copyRight'>©2022 - GBSW High School</p>
    </div>
  )
}
export default footer