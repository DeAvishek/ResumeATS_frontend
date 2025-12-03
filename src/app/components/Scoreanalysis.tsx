"use client";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import SkillDataSore from "../store/skill_store";
import Overallresume from "./linerprogress/Overallresume";
import Skillbase_Cir from "./linerprogress/Skillbase_Cir";
import Recomenadtio from "./Recomenadtio";
const ScoreAnalysis = () => {
  let prog = SkillDataSore((state) => state.score);
  prog = Math.ceil(prog)
  const [progress,setProgress] = React.useState<number>(0)
  React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            return 100;
          }
          return prog
        });
      }, 300);
      return () => {
        clearInterval(timer);
      };
    }, []);
  return (
    <div className="p-6 space-y-6 ">
      <div className=" bg-gray-600 rounded-xl shadow-md flex flex-wrap text-white">
        <div className="w-100 h-100 flex flex-col items-center">
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
                    ? "rgba(238, 155, 72, 1)"
                    : "rgba(44, 188, 65, 1)",
              textColor: "#f7efefff",
              trailColor: "#eee",
              backgroundColor: "#000",
            })}
          />
          <Overallresume/>
          <p className="text-white text-lg mt-3">Overall Resume Score</p>
        </div>
        <Skillbase_Cir/>
      </div>
      <div className="bg-gray-600 rounded-xl shadow-md flex flex-wrap text-white">
        <Recomenadtio/>
      </div>
    </div>
  );
};

export default ScoreAnalysis;
