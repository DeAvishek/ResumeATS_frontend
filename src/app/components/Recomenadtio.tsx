"use client"
import React from 'react'
import SkillDataSore from '../store/skill_store'
import { Button } from "../../components/ui/button"

const Recomenadtio = () => {
    const resume_skill = SkillDataSore((state)=>state.resume_skill);
    const job_skill = SkillDataSore((state)=>state.job_skill)

    const notMatchSkills = job_skill.filter(item => !resume_skill.includes(item))

    return (
        <div className="p-5 rounded-xl bg-muted/40 border shadow-sm space-y-4">
            {/* ✨ TODO: Add animation fade-in for better UX */}
            <h3 className="text-lg font-semibold">Recommended Skills to Add</h3>
            
            {/* suggestion: Add count badge -> “(3 missing skills)” */}

            {notMatchSkills.length === 0 ? (
                <p className="text-sm text-green-600 font-medium">
                    Great! Your resume skills match well with the job requirements ✔
                </p>
            ) : (
                <ul className="flex flex-wrap gap-3">
                    {notMatchSkills.map((item)=>(
                        <li key={item}>
                            <Button 
                                variant="secondary"
                                className="rounded-full capitalize text-sm transition hover:scale-105"
                            >
                                {item}
                                {/* suggestion: Add + icon to add this skill automatically into resume */}
                            </Button>
                        </li>
                    ))}
                </ul>
            )}

            {/* 
                FUTURE ENHANCEMENTS:
                2️⃣ Add a tooltip explaining why a skill is needed
                3️⃣ Add "Add All to Resume" button
                4️⃣ Show match percentage bar (Resume vs Job description)
                5️⃣ Download updated resume option
                6️⃣ Ranking: mark most important/required skills first
                e
            */}
        </div>
    )
}

export default Recomenadtio
