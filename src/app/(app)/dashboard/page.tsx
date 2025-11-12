"use client"
import React from 'react'
import Sidebar from '@/app/components/Sidebar'
import Skillgap from '@/app/components/Skillgap'
import Scoreanalysis from '@/app/components/Scoreanalysis'
const Dashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        {/* <Sidebar/> */}
        {/* <Skillgap/> */}
        <Scoreanalysis/>
    </div>
  )
}

export default Dashboard
