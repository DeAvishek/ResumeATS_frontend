"use client"
import React from 'react'
import Skillgap from '@/app/components/Skillgap'
import Scoreanalysis from '@/app/components/Scoreanalysis'
import dash_item_store from '@/app/store/dash_item_store'

const Dashboard = () => {
  const activate_item = dash_item_store((state)=>state.item); 
  console.log(activate_item);
  return (
    <>
        {activate_item=="Dashboard"?(<Scoreanalysis/>):activate_item=="Skill Gap"?(<Skillgap/>):(<p className='text-white'>WTF</p>)}
    </>
  )
}

export default Dashboard
