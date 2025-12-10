"use client"
import React, { useState, useEffect } from 'react'
import { JobMatchGenerate, } from "@/app/genai"
import SkillDataSore from '../store/skill_store'
import { Lightbulb, Target } from "lucide-react"
const Jobmatch = () => {
    const [jobMatchStr, setjobMatchStr] = useState<string>("")
    const ResumeSkill = SkillDataSore((state) => state.resume_skill)
    useEffect(() => {
        const generate = async () => {
            try {
                // const str = await JobMatchGenerate(ResumeSkill);
                //to avoid much calls
                setjobMatchStr(" ")

            } catch (error) {
                console.log(error)
                setjobMatchStr("");
            }
        }
        generate()
    }, [])
    let fake = jobMatchStr.replace('.', '|')
    fake = fake.replace('.', '|')
    const Rjobs_Why = fake.split('|')

    return (
        <div className="p-6 space-y-8">
            <div className='flex flex-warp gap-10 border rounded-xl border-red-200 w-180 h-10'>
                <Lightbulb className='h-10 w-10 text-amber-500' />
                <p className='font-bold text-xl text-white mt-1'>AI Powered Jobs Recomendation 💥 based on Your Resume Skills</p>
            </div>
            {Rjobs_Why.length > 2 ? Array.from({ length: Rjobs_Why.length / 2 }).map((_, idx) => {
                const i = idx * 2;
                return (
                    <div
                        key={i}
                        className='flex flex-col gap-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700'
                    >
                        <div className='flex flex-wrap gap-2'>
                            <Target className="text-amber-500" />
                            <div>
                                <h2 className="font-bold text-xl text-green-300">{Rjobs_Why[i] || "hii"}</h2>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-semibold text-gray-100 mt-1'>{Rjobs_Why[i + 1] || "hello"}</h2>
                        </div>
                    </div>
                );
            }) : (
                <div className='flex flex-col gap-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700'>
                    <div>
                        <h2 className="font-bold text-xl text-green-300">Internal Server Error</h2>
                    </div>
                    <div>
                        <h2 className='text-semibold text-gray-100 mt-1'>
                            Internal server is Down please try again later !!! we will Notified 👋 you when service is Available...Thanku
                        </h2>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Jobmatch
