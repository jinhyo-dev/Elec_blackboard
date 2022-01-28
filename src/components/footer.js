import { useState } from 'react';
import '../styles/footer.css';

export default function footer() {
  const [color, setColor] = useState(false)
  
  // const changeColor = (e) => {
  //   if color === true {

  //   }
  }

  return (
  <div>
    <button className="btn-changeColor" onClick={() => setColor(true)}> Dark Mode</button>
    <div className="footer">
      <p>© 2022. GBSWHS.</p>
    </div>
  </div>
  )

}
