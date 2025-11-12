"use client"
import React from "react"
import SkillDataSore from "../store/skill_store"

const Skillgap = () => {
    const resume_skill = SkillDataSore((state) => state.resume_skill)
    const job_skill = SkillDataSore((state) => state.job_skill)
    const score = SkillDataSore((state) => state.score)
    const notMatched  = job_skill.filter(value=>!resume_skill.includes(value))

    return (
        <div className="p-6 space-y-6">
            <div>
                <h1 className="text-xl font-bold mb-3">Job Skills</h1>
                <div className="flex flex-wrap gap-3">
                    {job_skill.map((item) => (
                        <span
                            key={item}
                            className="px-4 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 cursor-pointer transition"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            <div>
                <h1 className="text-xl font-bold mb-3">Matching Skills</h1>
                <div className="flex flex-wrap gap-3">
                    {resume_skill.map((item) => (
                        <span
                            key={item}
                            className="px-4 py-2 bg-green-500 text-white rounded-full shadow hover:bg-green-600 cursor-pointer transition"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
            <div>
                <h1 className="text-xl font-bold mb-3">!!!</h1>
                <div className="flex flex-wrap gap-3">
                    {notMatched.map((item) => (
                        <span
                            key={item}
                            className="px-4 py-2 bg-red-500 text-white rounded-full shadow hover:bg-green-600 cursor-pointer transition"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
            
            <div>
                <span>{score}</span>
            </div>
        </div>
    )
}

export default Skillgap
