"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import SkillDataSore from '@/app/store/skill_store';
export default function Skillbase_line() {
    const Resume_skill = SkillDataSore((state) => state.resume_skill);
    const job_skill = SkillDataSore((state) => state.job_skill);
    const prog = Math.ceil((Resume_skill.length / job_skill.length) * 100)
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                return prog
            });
        }, 500);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <Box sx={{ width: '300px' }}>
            <LinearProgress
                className='mt-10'
                variant="determinate"

                value={progress}
                sx={{
                    height: 25, borderRadius: 5,
                    backgroundColor: "#dededeff",
                    "& .MuiLinearProgress-bar": {
                        backgroundColor: progress < 50
                            ? "#ee3929ff"        // red for <50
                            : progress <= 75
                                ? "#f2a013ff"        // orange for 51-75
                                : "#19d80fff",   // fill color
                    },
                    transition: "width 1.2s ease-in-out"
                }} // increase height here
            />
        </Box>
    );
}
