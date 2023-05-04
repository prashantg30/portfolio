import React, { useState } from 'react'
import '../sidebar/sidebar.css'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
// import Awards from './Awards'
const SideBar = () => {
    const [index,setIndex] = useState(0)
  return (
    <div className='sidebar-container'>
        <div className="side-bar-left">
            <ul>
                <li className={`sidebar-link ${index===0 ?'active-side-bar':''}`} onClick={()=>setIndex(0)}>Education</li>
                <li className={`sidebar-link ${index===1 ?'active-side-bar':''}`} onClick={()=>setIndex(1)}>Experience</li>
                <li className={`sidebar-link ${index===2 ?'active-side-bar':''}`} onClick={()=>setIndex(2)}>Skills</li>
                {/* <li className={`sidebar-link ${index===3 ?'active-side-bar':''}`} onClick={()=>setIndex(3)}>Awards</li> */}
            </ul>
        </div>
        <div className="side-bar-right">
        <div className="test" onMouseOver={()=>setIndex(0)} >
       <Education/>
        </div>
        <div className="" onMouseOver={()=>setIndex(1)} >
         <Experience/>
        </div>
        <div className=""onMouseOver={()=>setIndex(2)} >
        <Skills/>
        </div>
        {/* <div className=""  hidden={index!==3}>
        <Awards/>
        </div> */}
        </div>
    </div>
  )
}

export default SideBar