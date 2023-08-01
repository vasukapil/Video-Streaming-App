import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import MainContainer from './MainContainer'
import SideBar from './SideBar'
import { togglesMenu } from './utils/appSlice'

const Body = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(togglesMenu()) 
    })
  return (
    <div className='flex'>
   <SideBar/>
   <Outlet/>
   </div>
  )
}

export default Body