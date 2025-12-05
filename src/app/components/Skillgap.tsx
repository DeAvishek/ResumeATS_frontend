"use client"
import React from "react"
import SkillDataSore from "../store/skill_store"
import { Check, X, AlertCircle, Target, TrendingUp, BarChart3, ClipboardCheck } from "lucide-react"

const Skillgap = () => {
    const resume_skill = SkillDataSore((state) => state.resume_skill)
    const job_skill = SkillDataSore((state) => state.job_skill)
    const score = SkillDataSore((state) => state.score)
    const notMatched = job_skill.filter(value => !resume_skill.includes(value))
    
    // Calculate match percentage
    const matchPercentage = resume_skill.length > 0 
        ? Math.round((resume_skill.length / job_skill.length) * 100) 
        : 0

    return (
        <div className="p-6 space-y-8">
            {/* Header with Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700">
                    <div className="flex flex-wrap gap-60 items-center">
                        <div>
                            <p className="text-sm text-gray-400 mb-1">Job Requirements</p>
                            <p className="text-2xl font-bold text-white">{job_skill.length} skills</p>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-blue-900/30 flex items-center justify-center">
                            <Target className="h-5 w-5 text-blue-400" />
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-400 mb-1">Your Skills</p>
                            <p className="text-2xl font-bold text-white">{resume_skill.length} skills</p>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-green-900/30 flex items-center justify-center">
                            <Check className="h-5 w-5 text-green-400" />
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-400 mb-1">Match Rate</p>
                            <p className="text-2xl font-bold text-white">{matchPercentage}%</p>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-purple-900/30 flex items-center justify-center">
                            <TrendingUp className="h-5 w-5 text-purple-400" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Job Skills Section */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-900/20 border border-blue-700/30 flex items-center justify-center">
                            <Target className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white">Required Job Skills</h1>
                            <p className="text-sm text-gray-400">Skills mentioned in the job description</p>
                        </div>
                    </div>
                    <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm font-medium rounded-full border border-blue-700/50">
                        {job_skill.length} skills
                    </span>
                </div>
                <div className="flex flex-wrap gap-3">
                    {job_skill.map((item, index) => (
                        <div
                            key={item}
                            className="group relative"
                        >
                            <span className="px-4 py-2.5 bg-blue-900/40 text-blue-100 rounded-xl border border-blue-700/50 hover:bg-blue-800/60 hover:border-blue-600 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-900/20 flex items-center gap-2">
                                <span className="text-sm font-medium">{item}</span>
                                <div className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse"></div>
                            </span>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <div className="px-2 py-1 bg-gray-900 text-xs text-gray-300 rounded shadow-lg whitespace-nowrap">
                                    Required skill #{index + 1}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Matching Skills Section */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-green-900/20 border border-green-700/30 flex items-center justify-center">
                            <ClipboardCheck className="h-5 w-5 text-green-400" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white">Your Matching Skills</h1>
                            <p className="text-sm text-gray-400">Skills that match the job requirements</p>
                        </div>
                    </div>
                    <span className="px-3 py-1 bg-green-900/30 text-green-300 text-sm font-medium rounded-full border border-green-700/50">
                        {resume_skill.length} matched
                    </span>
                </div>
                <div className="flex flex-wrap gap-3">
                    {resume_skill.map((item) => (
                        <div
                            key={item}
                            className="group relative"
                        >
                            <span className="px-4 py-2.5 bg-gradient-to-r from-green-900/40 to-emerald-900/40 text-green-100 rounded-xl border border-green-700/50 hover:bg-green-800/60 hover:border-green-600 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-green-900/20 flex items-center gap-2">
                                <Check className="h-4 w-4" />
                                <span className="text-sm font-medium">{item}</span>
                            </span>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <div className="px-2 py-1 bg-gray-900 text-xs text-gray-300 rounded shadow-lg whitespace-nowrap">
                                    Perfect match!
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Skills Gap Section */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-red-900/20 border border-red-700/30 flex items-center justify-center">
                            <AlertCircle className="h-5 w-5 text-red-400" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white">Skills Gap Analysis</h1>
                            <p className="text-sm text-gray-400">Recommended skills to improve your match</p>
                        </div>
                    </div>
                    <span className="px-3 py-1 bg-red-900/30 text-red-300 text-sm font-medium rounded-full border border-red-700/50">
                        {notMatched.length} to learn
                    </span>
                </div>
                
                {notMatched.length === 0 ? (
                    <div className="p-6 bg-green-900/20 rounded-xl border border-green-700/30">
                        <div className="flex items-center gap-3">
                            <div className="h-12 w-12 rounded-full bg-green-900/30 flex items-center justify-center">
                                <Check className="h-6 w-6 text-green-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-green-300">Perfect Match! 🎯</h3>
                                <p className="text-green-200/80 text-sm mt-1">
                                    All job requirements are covered by your skills. Excellent preparation!
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="flex flex-wrap gap-3 mb-6">
                            {notMatched.map((item) => (
                                <div
                                    key={item}
                                    className="group relative"
                                >
                                    <span className="px-4 py-2.5 bg-gradient-to-r from-red-900/40 to-orange-900/40 text-red-100 rounded-xl border border-red-700/50 hover:bg-red-800/60 hover:border-red-600 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-red-900/20 flex items-center gap-2">
                                        <X className="h-4 w-4" />
                                        <span className="text-sm font-medium">{item}</span>
                                    </span>
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                                        <div className="px-2 py-1 bg-gray-900 text-xs text-gray-300 rounded shadow-lg whitespace-nowrap">
                                            Missing from your resume
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Improvement Tips */}
                        <div className="mt-6 p-5 bg-gray-800/40 rounded-xl border border-gray-700">
                            <div className="flex items-start gap-3">
                                <div className="h-10 w-10 rounded-full bg-amber-900/20 border border-amber-700/30 flex items-center justify-center flex-shrink-0">
                                    <BarChart3 className="h-5 w-5 text-amber-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-amber-200 mb-2">Improvement Opportunity</h4>
                                    <p className="text-sm text-gray-300">
                                        Adding these {notMatched.length} skills could increase your match rate to <span className="font-bold text-white">100%</span>. 
                                        Consider learning these through online courses or side projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Match Score Visualization */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 shadow-lg">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-purple-400" />
                    Match Progress
                </h3>
                <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Current Match</span>
                        <span className="text-white font-medium">{matchPercentage}%</span>
                    </div>
                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full transition-all duration-1000"
                            style={{ width: `${matchPercentage}%` }}
                        ></div>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Potential Match</span>
                        <span className="text-green-400 font-medium">100%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skillgap