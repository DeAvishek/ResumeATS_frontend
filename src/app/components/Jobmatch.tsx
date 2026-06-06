"use client"
import { useState, useEffect } from 'react'
import { JobMatchGenerate } from "@/app/genai"
import SkillDataStore from '../store/skill_store' // Fixed typo in import filename context if needed
import { Lightbulb, Target } from "lucide-react"
import Loader from './Loader'

const Jobmatch = () => {
    const [jobMatchStr, setJobMatchStr] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(true)
    
    const resumeSkill = SkillDataStore((state) => state.resume_skill)

    useEffect(() => {
        const generate = async () => {
            try {
<<<<<<< HEAD
                const str = await JobMatchGenerate(ResumeSkill);
                setjobMatchStr(str||"")
                setLoading(false)

            } catch (error) {
                console.log(error)
                setjobMatchStr("");
                setLoading(false)
=======
                setLoading(true) // Explicitly set to true when starting
                const str = await JobMatchGenerate(resumeSkill);
                setJobMatchStr(str || "")
            } catch (error) {
                console.error("Error generating job match:", error)
                setJobMatchStr("");
            } finally {
                setLoading(false) // Always turns off loading when done
>>>>>>> f182131 (fixing the ai recomendation thing)
            }
        }
        generate()
    }, []) // Added resumeSkill as dependency to re-run if skills change

    // Robust splitting: replace all periods globally if that's your string format
    // Note: It's highly recommended to update your Gemini prompt to return JSON instead!
    const rJobsWhy = jobMatchStr ? jobMatchStr.split('.') : []
    // Filter out empty spaces left behind by trailing periods
    const cleanPairs = rJobsWhy.map(item => item.trim()).filter(Boolean)

    return (
        <div className="p-6 space-y-8">
            {/* Header banner */}
            <div className='flex flex-wrap gap-4 items-center border rounded-xl border-red-200 p-3 max-w-3xl'>
                <Lightbulb className='h-8 w-8 text-amber-500 shrink-0' />
                <p className='font-bold text-xl text-white'>
                    AI Powered Jobs Recommendation 💥 based on Your Resume Skills
                </p>
            </div>
<<<<<<< HEAD
            {Loading?<Loader/>:!Loading && Rjobs_Why.length > 2? Array.from({ length: Rjobs_Why.length / 2 }).map((_, idx) => {
                const i = idx * 2;
                return (
                    <div
                        key={i}
                        className='flex flex-col gap-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700'
                    >
                        <div className='flex flex-wrap gap-2'>
                            <Target className="text-amber-500" />
=======

            {/* Conditional Rendering Logic */}
            {loading ? (
                <Loader />
            ) : cleanPairs.length >= 2 ? (
                // Iterating through pairs safely 
                Array.from({ length: Math.floor(cleanPairs.length / 2) }).map((_, idx) => {
                    const i = idx * 2;
                    return (
                        <div
                            key={i}
                            className='flex flex-col gap-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700'
                        >
                            <div className='flex flex-wrap gap-2 items-center'>
                                <Target className="text-amber-500 h-5 w-5" />
                                <h2 className="font-bold text-xl text-green-300">
                                    {cleanPairs[i]}
                                </h2>
                            </div>
>>>>>>> f182131 (fixing the ai recomendation thing)
                            <div>
                                <h2 className='font-semibold text-gray-100 mt-1'>
                                    {cleanPairs[i + 1]}
                                </h2>
                            </div>
                        </div>
                    );
                })
            ) : (
                /* Fallback UI when API fails or string is empty */
                <div className='flex flex-col gap-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700 max-w-3xl'>
                    <div>
                        <h2 className="font-bold text-xl text-red-400">No Match Recommendations Available</h2>
                    </div>
                    <div>
                        <p className='font-semibold text-gray-300 mt-1'>
                            We couldn't process the skills profile or the service is temporarily timing out. Please refresh or try again later.
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Jobmatch