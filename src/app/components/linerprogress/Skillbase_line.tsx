"use client"
import * as React from 'react';
import SkillDataSore from '@/app/store/skill_store';
import ScoreBar from './ScoreBar';
export default function Skillbase_line() {
    const Resume_skill = SkillDataSore((state) => state.resume_skill);
    const job_skill = SkillDataSore((state) => state.job_skill);
    const prog = Math.ceil((Resume_skill.length / job_skill.length) * 100)
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 100;
                }
                return prog
            });
        }, 500);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <ScoreBar score={progress}/>
    );
}
