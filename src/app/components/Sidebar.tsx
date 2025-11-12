"use client"
import React from 'react'
import { useState } from 'react';
import { FaHome, FaFileAlt, FaChartLine, FaCog, FaUser } from "react-icons/fa";
const Sidebar = () => {
    const sideBarMenu =[
        { name: "Dashboard", icon: <FaHome /> },
        { name: "Resume Upload", icon: <FaFileAlt /> },
        { name: "Job Match", icon: <FaChartLine /> },
        { name: "Skill Gap", icon: <FaUser /> },
        { name: "Settings", icon: <FaCog /> },
    ];
    const [activate, setactivate] = useState<string>("Dashboard");
  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col">
        <div className="text-2xl font-bold p-4 border-b border-gray-700">
            Resume Analyzer
        </div>
       <ul className='flex flex-col mt-4'>
        {sideBarMenu.map((item)=>(
            <li key={item.name}
            onClick={()=>setactivate(item.name)}
            className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-700 transition ${
              activate === item.name ? "bg-white-500 text-green-400" : ""
            }`}
            >
                <span>
                    {item.icon}
                </span>
                <span className='text-lg'>{item.name}</span>
            </li>
        ))} 
       </ul>
    </div>
  )
}

export default Sidebar
