import React from 'react'
import { Link } from 'react-router-dom';


export default function StudyBar() {
  return (
 <>
      <div className="container-fluid mt-5 p-5 ">
    <div className="row pt-2">
     
     <ul className="scrollable-list">
          <li ><Link to="/services/study/JavaScript">JavaScript</Link></li>
           <li><Link to="/services/study/Java">Java</Link></li>
           <li><Link to="/services/study/Python">Python</Link></li>
           <li><Link to="/services/study/PHP">PHP</Link></li>
           <li><Link to="/services/study/C">C</Link></li>
           <li><Link to="/services/study/C++">C++ </Link></li>
           <li><Link to="/services/study/React">React</Link></li> 
           <li><Link to="/services/study/C-Sharp">C#</Link></li> 
        
             
     </ul>
      </div>
   
  </div>
 
 </>
  )
}
