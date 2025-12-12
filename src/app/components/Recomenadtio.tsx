"use client"
import React from 'react'
import SkillDataSore from '../store/skill_store'
import { Button } from "../../components/ui/button"
import generate from "@/app/genai"
import { Badge, Check, Info, Lightbulb } from 'lucide-react'

const Recomenadtio = () => {
    const resume_skill = SkillDataSore((state) => state.resume_skill);
    const job_skill = SkillDataSore((state) => state.job_skill)
    const notMatchSkills = job_skill.filter(item => !resume_skill.includes(item))
    let prog = SkillDataSore((state)=>state.score)
    prog = Math.ceil(prog)

    const [tooltips, setTooltips] = React.useState<Map<string, string>>(new Map())
    const skillmap = React.useRef(new Map<string, string>())
    React.useEffect(() => {
        const fetchTooltips = async () => {
            for (const skill of notMatchSkills) {
                if (!skillmap.current.has(skill)) {
                    // let why = await generate(skill) to avoid much calls
                    skillmap.current.set(skill,"hii")

                }
            }
            setTooltips(new Map(skillmap.current))
        }

        fetchTooltips()
    }, [])

    return (
        <div className="p-6 rounded-xl shadow-lg space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold text-white">Recommended Skills to Add</h3>
                    <p className="text-sm text-gray-300 mt-1">
                        Enhance your resume by adding these relevant skills
                    </p>
                </div>
                {notMatchSkills.length > 0 && (
                    <Badge className="px-3 py-1 text-sm">
                        {notMatchSkills.length} skills
                    </Badge>
                )}
            </div>

            {/* Skills Match Status */}
            {notMatchSkills.length === 0 ? (
                <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                            <Check className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                            <p className="font-medium text-green-800">
                                Excellent match! 🎯
                            </p>
                            <p className="text-sm text-green-600 mt-1">
                                Your resume skills align perfectly with the job requirements
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {notMatchSkills.map((skill) => (
                            <div
                                key={skill}
                                className="group relative"
                                data-tooltip={tooltips.get(skill) || "Loading..."}
                            >
                                <Button
                                    variant="outline"
                                    className="w-full justify-between px-4 py-3 rounded-xl border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 hover:shadow-md group-hover:scale-[1.02] capitalize"
                                >
                                    <span className="font-medium text-gray-700">{skill}</span>
                                </Button>

                                {/* Tooltip on Hover */}
                                {tooltips.has(skill) && (
                                    <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 z-50">
                                        <div className="bg-gray-900 text-white text-sm rounded-lg p-3 shadow-xl">
                                            <div className="font-medium mb-1 flex items-center gap-2">
                                                <Info className="h-4 w-4" />
                                                Why {skill} matters:
                                            </div>
                                            <p className="text-gray-200">{tooltips.get(skill)}</p>
                                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>


                    {/* Why These Skills Matter Section */}
                    {tooltips.size > 0 && (
                        <div className="mt-6 p-5 rounded-xl border border-gray-700 shadow-sm">
                            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                                <Lightbulb className="h-5 w-5 text-amber-500" />
                                Why These Skills Are Important
                            </h4>
                            <div className="space-y-4">
                                {Array.from(tooltips.entries()).slice(0, 3).map(([skill, why]) => (
                                    <div key={skill} className="p-3 rounded-lg bg-blue-50 border border-blue-100 hover:bg-blue-100 transition-colors">
                                        <div className="flex items-start gap-3">
                                            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-xs font-bold text-blue-600">✓</span>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-blue-900 ">{skill}</h5>
                                                <p className="text-sm text-gray-700 mt-1">{why||"hii i am god"}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </>
            )}

            {/* Match Percentage (Future Enhancement Placeholder) */}
            <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-white">Match Score</span>
                    <span className="text-sm font-bold text-blue-600">{prog}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
                        style={{ width: `${prog}%` }}
                    ></div>
                </div>
                {resume_skill.length!==job_skill.length && <p className="text-xs text-gray-200 mt-2">
                    Adding these skills could increase your match score to <strong>90%</strong>
                </p>}
            </div>
        </div>
    )
}
export default Recomenadtio
