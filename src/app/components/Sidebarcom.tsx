"use client";
import React, { useState, useEffect } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { FaHome, FaFileAlt, FaChartLine, FaCog, FaUser } from "react-icons/fa";
import dash_item_store from "../store/dash_item_store";

const Sidebarcom = ({ children }: { children: React.ReactNode }) => {
    const sideBarMenu = [
        { name: "Dashboard", icon: <FaHome /> },
        { name: "Resume Upload", icon: <FaFileAlt /> },
        { name: "Job Match", icon: <FaChartLine /> },
        { name: "Skill Gap", icon: <FaUser /> },
        { name: "Settings", icon: <FaCog /> },
    ];

    const [collapsed, setCollapsed] = useState(false);
    const [activate, setactivate] = useState<string>("Dashboard");
    const itemstore = dash_item_store((state) => state.set_item);

    useEffect(() => {
        itemstore(activate);
    }, [activate]);

    return (
        <div className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-all duration-300 ${collapsed ? "w-[80px]" : "w-[250px]"
            }`}
        >
            {/* <img src="..\..\media\analyzer.png" alt="hii" /> */}
            <button
                className="absolute top-3 left-3 z-50 bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition"
                onClick={() => setCollapsed(!collapsed)}
            >
                {collapsed ? "➡️" : "⬅️"}
            </button>

            {/* Sidebar */}
            <Sidebar
                collapsed={collapsed}
                backgroundColor="#111827"
                className="shadow-xl border-r border-gray-800 mt-10"

            >
                <Menu
                    menuItemStyles={{
                        button: {
                            padding: "12px",
                            marginBottom: "6px",
                            borderRadius: "8px",
                            color: "#d1d5db",
                            [`&.active`]: {
                                backgroundColor: "#1f2937",
                                color: "#10b981",
                            },
                            "&:hover": {
                                backgroundColor: "#1f2937",
                                color: "#10b981",
                            },
                        },
                    }}
                >
                    {sideBarMenu.map((item) => (
                        <MenuItem
                            key={item.name}
                            icon={item.icon}
                            onClick={() => setactivate(item.name)}
                            className={`${activate === item.name ? "active" : ""}`}
                        >
                            {!collapsed && (
                                <span className="ml-2 font-medium tracking-wide">
                                    {item.name}
                                </span>
                            )}
                        </MenuItem>
                    ))}
                </Menu>
            </Sidebar>
            <div
                className={`transition-all duration-300 ${collapsed ? "ml-[80px]" : "ml-[250px]"
                    } p-6`}
            >
                {children}
            </div>
        </div>
    );
};

export default Sidebarcom;
