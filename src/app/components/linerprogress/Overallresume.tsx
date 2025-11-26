"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import SkillDataSore from '@/app/store/skill_store';
import ScoreBar from './ScoreBar';
export default function Overallresume() {
  let prog = SkillDataSore((state)=>state.score)
  prog = Math.ceil(prog)
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prog);
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <ScoreBar score={progress}/>
  );
}
