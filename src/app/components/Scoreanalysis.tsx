"use client";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import SkillDataSore from "../store/skill_store";
import Overallresume from "./linerprogress/Overallresume";
import Skillbase_Cir from "./linerprogress/Skillbase_Cir";
import Recomenadtio from "./Recomenadtio";
import { Lightbulb, Sparkles, Target, TrendingUp } from "lucide-react";
const ScoreAnalysis = () => {
  let prog = SkillDataSore((state) => state.score);
  prog = Math.ceil(prog)
  const [progress, setProgress] = React.useState<number>(0)
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
  const resumeSkill = SkillDataSore((state) => state.resume_skill)
  const job_skill = SkillDataSore((state) => state.job_skill)
  return (
    <div className="p-6 space-y-6">
      {/* Main Score Card */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-700">
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Resume Analysis</h2>
              <p className="text-gray-300 text-sm mt-1">Comprehensive skill and match evaluation</p>
            </div>
            <div className="px-3 py-1 bg-gray-700/50 rounded-full border border-gray-600">
              <span className="text-xs font-medium text-gray-300">Updated just now</span>
            </div>
          </div>

          {/* Score and Metrics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Overall Score - Left Panel */}
            <div className="lg:col-span-1 flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="relative w-48 h-48 mb-4">
                <CircularProgressbar
                  value={progress}
                  text={`${progress}%`}
                  styles={buildStyles({
                    rotation: 0.25,
                    strokeLinecap: 'round',
                    textSize: '28px',
                    pathTransitionDuration: 1,
                    pathColor: progress < 50
                      ? "rgba(255, 0, 0, 1)"
                      : progress < 75
                        ? "rgba(238, 155, 72, 1)"
                        : "rgba(44, 188, 65, 1)",
                    textColor: '#ffffff',
                    trailColor: 'rgba(255, 255, 255, 0.1)',
                    backgroundColor: 'transparent',
                  })}
                />

                {/* Inner glow effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border-2 border-gray-600/30"></div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-1">Overall Resume Score</h3>
                <p className="text-gray-300 text-sm mb-4">Based on skills, experience, and match rate</p>

                {/* Score indicator */}

              </div>

              <div className="mt-6 w-full">
                <Overallresume />
              </div>
            </div>

            {/* Right Panel - Detailed Metrics */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Skill Match Card */}
                <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700 hover:border-gray-600 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-white">Skill Match {resumeSkill.length}/{job_skill.length}</h4>
                    <Target className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Matched Skills</span>
                      <span className="text-white font-medium"></span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" style={{ width: `${Math.ceil(resumeSkill.length / job_skill.length * 100)}%` }}></div>
                    </div>
                  </div>
                </div>

                {/* Experience Level */}

              </div>

              {/* Skill Breakdown Section */}
              <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
                <div className="flex items-center justify-between mb-5">
                  <h4 className="font-semibold text-white">Skill Breakdown</h4>
                  <Sparkles className="h-5 w-5 text-purple-400" />
                </div>
                <Skillbase_Cir />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations Card */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
        <div className="p-6 md:p-8">

          <div className="bg-slate-800/30 rounded-xl border border-slate-700 p-1">
            <Recomenadtio />
          </div>

          {/* Improvement Tips */}
          <div className="mt-6 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
            <div className="flex items-center gap-3">
              <Lightbulb className="h-5 w-5 text-amber-400 flex-shrink-0" />
              <p className="text-sm text-gray-300">
                <span className="font-medium text-white">Pro Tip:</span> Adding just 3 more skills from the recommendations can increase your match rate by up to90 %
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreAnalysis;
