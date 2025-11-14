"use client";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import SkillDataSore from "../store/skill_store";
import Overallresume from "./linerprogress/Overallresume";
const ScoreAnalysis = () => {
  let score = SkillDataSore((state) => state.score);
  score = Math.ceil(score)
  const brief = [
    { grade: "Average", color: "bg-red-500" },
    { grade: "Good", color: "bg-yellow-500" },
    { grade: "Excellent", color: "bg-green-500" },
  ];


  return (
    <div className="p-6 space-y-6 ">
      <div className=" bg-gray-50 rounded-xl shadow-md flex flex-wrap">
        <div className="w-100 h-100 flex flex-col items-center">
          <CircularProgressbar
            value={score}
            text={`${score}`}
            styles={buildStyles({
              rotation: 0,
              strokeLinecap: "round",
              textSize: "14px",
              pathTransitionDuration: 0.5,
              pathColor:
                score < 50
                  ? "rgba(255, 0, 0, 1)"
                  : score < 75
                    ? "rgba(206, 151, 34, 1)"
                    : "rgba(0, 255, 40, 1)",
              textColor: "#111",
              trailColor: "#eee",
              backgroundColor: "#000",
            })}
          />
          <Overallresume/>
          <p className="text-black-600 text-lg mt-3">Overall Resume Score</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreAnalysis;
