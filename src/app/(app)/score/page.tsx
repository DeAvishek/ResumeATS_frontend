"use client"
import Score from "@/app/components/Score";
import React from "react";
const Scorepage=()=>{
    return(
        <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
            <Score/>
        </div>
    )
}
export default Scorepage