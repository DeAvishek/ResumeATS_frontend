"use client";
import React from "react";
import Sidebarcom from "@/app/components/Sidebarcom";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-900">
      {/* Sidebar */}
      <Sidebarcom />

      {/* Main content */}
      <div className="flex-1 ml-[250px] transition-all duration-300 p-6">
        {children}
      </div>
    </div>
  );
}
