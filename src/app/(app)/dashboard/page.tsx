"use client"
import React, { useState } from 'react'
import Sidebar from '@/app/components/Sidebar'
import Skillgap from '@/app/components/Skillgap'
import Scoreanalysis from '@/app/components/Scoreanalysis'
import dash_item_store from '@/app/store/dash_item_store'
import { fa } from 'zod/v4/locales'

const Dashboard = () => {
  const activate_item = dash_item_store((state)=>state.item); 
  console.log(activate_item);
  const [activeSidebar, setactiveSidebar] = useState<boolean>(false)
  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
          {activeSidebar==false?(<img src="xx" alt='tab' onClick={()=>setactiveSidebar(!activeSidebar)}/>):(<Sidebar/>)}
          {activate_item=="Dashboard"?(<Scoreanalysis/>):activate_item=="Skill Gap"?(<Skillgap/>):(<p>WTF</p>)}
      </div>
       <div>
        
      </div> 
    </>
  )
}

export default Dashboard
