"use client"
import React,{useState,useEffect} from 'react'
import {JobMatchGenerate,} from "@/app/genai"
import SkillDataSore from '../store/skill_store'
const Jobmatch = () => {
    const [jobMatchStr, setjobMatchStr] = useState<string>("")
    const ResumeSkill = SkillDataSore((state)=>state.resume_skill)
    useEffect(()=>{
        const generate = async()=>{
            try {
                const str = await JobMatchGenerate(ResumeSkill);
                setjobMatchStr(str||"are you there")
                
            } catch (error) {
                console.log(error)
                setjobMatchStr("");
            }
        }
        generate()
    },[])
    let fake = jobMatchStr.replace('.','|')
    fake = fake.replace('.','|')
    const Rjobs_Why = fake.split('|')
  return (
    <div className="p-6 space-y-8">
        <p className='text-white'>{fake}</p>
        <div className='flex flex-col gap-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700'>
            <div>
                <h5 className="font-semibold text-blue-900 ">{Rjobs_Why[0]}</h5>
            </div>
            <div>
                <h5 className='text-sm text-gray-700 mt-1'>{Rjobs_Why[1]}</h5>
            </div>
        </div>
        <div className='flex flex-col gap-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700'>
            <div>
                <h5 className="font-semibold text-blue-900 ">{Rjobs_Why[2]}</h5>
            </div>
            <div>
                <h5 className='text-sm text-gray-700 mt-1'>{Rjobs_Why[3]}</h5>
            </div>
        </div>
        <div className='flex flex-col gap-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700'>
            <div>
                <h5 className="font-semibold text-blue-900 ">{Rjobs_Why[4]}</h5>
            </div>
            <div>
                <h5 className='text-sm text-gray-700 mt-1'>{Rjobs_Why[5]}</h5>
            </div>
        </div>

    </div>
  )
}

export default Jobmatch
