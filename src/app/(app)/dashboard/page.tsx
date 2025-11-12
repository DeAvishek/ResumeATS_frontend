"use client"
import React from 'react'
import Score from '@/app/components/Score'
import Sidebar from '@/app/components/Sidebar'

const Dashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <Sidebar/>
        <Score/>
    </div>
  )
}

export default Dashboard
