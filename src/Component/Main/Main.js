import React from 'react'
import Home from '../HomeUser/Home/Home'
import Navbar from '../HomeUser/Navbar/Navbar'
import ResponsiveNav from './ResponsiveNav/ResponsiveNav'
import './Main.css'
import CheifList from '../CheifHome/CheifList/CheifList'
import CheifPage from '../CheifUser/CheifPage/CheifPage'

function Main() {
  return (
       <div className="row homNavContainer  rounded-3 " style={{backgroundColor:'rgb(155, 193, 155)'}} >
        <div className="col-12 col-lg-10 py-4  px-3 homeContainer rounded-4" style={{backgroundColor:'#fff',overflowY:"scroll"}}>
          <ResponsiveNav />
           <Home /> 
         {/* <CheifList/> */}
          {/* <CheifPage/> */}


        </div>

        <div className='col-2 d-none d-lg-flex' >
          <Navbar/>
        </div>
      
      </div> 
  )
}

export default Main