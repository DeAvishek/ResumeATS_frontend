"use client"
import React from 'react'
import SkillDataSore from '@/app/store/skill_store'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Skillbase_line from './Skillbase_line';
import "react-circular-progressbar/dist/styles.css";
const Skillbase_Cir = () => {
    const Resume_skill = SkillDataSore((state)=>state.resume_skill);
    const job_skill = SkillDataSore((state)=>state.job_skill);
    const prog = Math.ceil((Resume_skill.length/job_skill.length)*100)
    const [progress,setProgress] = React.useState(0);
    React.useEffect(()=>{
        const timer = setInterval(()=>{
            setProgress((oldprogress)=>{
                if(oldprogress==100){
                    return 100;
                }
                return prog
            })
        },500)
        return ()=>{
            clearInterval(timer)
        }
    },[])
    return (
        <div className='w-100 h-100 flex flex-col items-center'>
            <CircularProgressbar
                value={progress}
                text={`${progress}/100`}
                styles={buildStyles({
                    rotation: 0,
                    strokeLinecap: "round",
                    textSize: "14px",
                    pathTransitionDuration: 0.5,
                    pathColor:
                        progress < 50
                            ? "rgba(255, 0, 0, 1)"
                            : progress < 75
                                ? "rgba(206, 151, 34, 1)"
                                : "rgba(0, 255, 40, 1)",
                    textColor: "#111",
                    trailColor: "#eee",
                    backgroundColor: "#000",
                })}
            />
            <Skillbase_line/>
            <p className="text-black-600 text-lg mt-3">Overall Skill Score</p>
        </div>
    )
}

export default Skillbase_Cir
