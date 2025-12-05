"use client"
import React from 'react'
import Skillgap from '@/app/components/Skillgap'
import Scoreanalysis from '@/app/components/Scoreanalysis'
import dash_item_store from '@/app/store/dash_item_store'
import Jobmatch from '@/app/components/Jobmatch'
const Dashboard = () => {
  const activate_item = dash_item_store((state)=>state.item); 
  console.log(activate_item);
  return (
    <>
        {activate_item=="Dashboard"?(<Scoreanalysis/>):activate_item=="Skill Gap"?(<Skillgap/>):activate_item=="Job Match"?(<Jobmatch/>):(<p className='text-white'>WTF</p>)}
    </>
  )
}

export default Dashboard
