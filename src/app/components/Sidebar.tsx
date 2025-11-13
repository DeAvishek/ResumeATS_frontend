"use client"
import React from 'react'
import { useState } from 'react';
import { FaHome, FaFileAlt, FaChartLine, FaCog, FaUser } from "react-icons/fa";
import dash_item_store from '../store/dash_item_store';
const Sidebar = () => {
  const sideBarMenu = [
    { name: "Dashboard", icon: <FaHome /> },
    { name: "Resume Upload", icon: <FaFileAlt /> },
    { name: "Job Match", icon: <FaChartLine /> },
    { name: "Skill Gap", icon: <FaUser /> },
    { name: "Settings", icon: <FaCog /> },
  ];
  const [activate, setactivate] = useState<string>("Dashboard");
  const itemstore = dash_item_store((state) => state.set_item)
  itemstore(activate)
  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col">
      <div className="text-2xl font-bold p-4 border-b border-gray-700">
        Resume Analyzer
      </div>
      <ul className='flex flex-col mt-4'>
        {sideBarMenu.map((item) => (
          <li key={item.name}
            onClick={() => setactivate(item.name)}
            className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-700 transition ${activate === item.name ? "bg-white-500 text-green-400" : ""
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
