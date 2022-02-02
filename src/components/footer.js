// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/footer.css';


const footer = () => {
  const activeStyle = {
    color: 'green'
  }
  return(
    <div className="footer">
      <div className='icoFlax'>
        <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
        <NavLink exact to="/food" activeStyle={activeStyle}>Food</NavLink>
        <NavLink exact to="/notice" activeStyle={activeStyle}>Notice</NavLink>

      </div>
      <p className='copyRight'>© 2022 - GBSW High School</p>
    </div>
  )
}
export default footer