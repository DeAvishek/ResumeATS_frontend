"use client"
import React from 'react'
import SkillDataSore from '@/app/store/skill_store'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Skillbase_line from './Skillbase_line';
import "react-circular-progressbar/dist/styles.css";
const Skillbase_Cir = () => {
    const Resume_skill = SkillDataSore((state) => state.resume_skill);
    const job_skill = SkillDataSore((state) => state.job_skill);
    const prog = Math.ceil((Resume_skill.length / job_skill.length) * 100)
    const [progress, setProgress] = React.useState(0);
    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldprogress) => {
                if (oldprogress == 100) {
                    return 100;
                }
                return prog
            })
        }, 500)
        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <div className='w-100 h-100 flex flex-col items-center'>
            <CircularProgressbar
                value={progress}
                text={`${progress}%`}
                styles={buildStyles({
                    rotation: 0.25,
                    strokeLinecap: 'round',
                    textSize: "14px",
                    pathTransitionDuration: 1,
                    pathColor:
                        progress < 50
                            ? "rgba(255, 0, 0, 1)"
                            : progress < 75
                                ? "rgba(238, 155, 72, 1)"
                                : "rgba(44, 188, 65, 1)",
                    textColor: "#fcfafaff",
                    trailColor: 'rgba(255, 255, 255, 0.1)',
                    backgroundColor: 'transparent',

                })}
            />
            <Skillbase_line />
            <p className="text-white text-lg mt-3">Overall Skill Score</p>
            
        </div>
    )
}

export default Skillbase_Cir
