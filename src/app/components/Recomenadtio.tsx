"use client"
import React from 'react'
import SkillDataSore from '../store/skill_store'
import { Button } from "../../components/ui/button"
import generate from "@/app/genai"
import { skillmap } from '@/app/genai'
const Recomenadtio =() => {
    const resume_skill = SkillDataSore((state) => state.resume_skill);
    const job_skill = SkillDataSore((state) => state.job_skill)

    const notMatchSkills = job_skill.filter(item => !resume_skill.includes(item))
    const [tooltips, setTooltips] = React.useState<Map<string, string>>(new Map())

    React.useEffect(() => {
        const fetchTooltips = async () => {
            for (const skill of notMatchSkills) {
                if (!skillmap.has(skill)) {
                    await generate({ skill })
                }
            }
            // after all generation, copy Map to state to trigger re-render
            setTooltips(new Map(skillmap))
        }

        fetchTooltips()
    },[])
    return (
        <div className="p-5 rounded-xl bg-muted/40 border shadow-sm space-y-4">
            {/* ✨ TODO: Add animation fade-in for better UX */}
            <h3 className="text-lg font-semibold">Recommended Skills to Add</h3>


            {notMatchSkills.length === 0 ? (
                <p className="text-sm text-green-600 font-medium">
                    Great! Your resume skills match well with the job requirements ✔
                </p>
            ) : (
                <ul className="flex flex-wrap gap-3">
                    {notMatchSkills.map((item) => (
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
            <div>
                {Array.from(skillmap.entries()).map(([skill, why]) => (
                    <div key={skill}>
                        <strong>{skill}</strong>
                        <p className="text-sm text-gray-600">{why}</p>
                    </div>
                ))}
            </div>


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
