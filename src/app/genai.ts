import { GoogleGenAI } from "@google/genai";
import SkillDataSore from "./store/skill_store";
type skilltype = {
    skill: string
    ResumeSkill: [string]
}


const generate = async ({ skill }: skilltype) => {
    const API_KEY = "AIzaSyADdHiPeoNHYdjDr1rbMh1WGZAfQkr9Lzs"
    const ai = new GoogleGenAI({ apiKey: API_KEY })
    const prompt = `You are an AI assintant who discuss why ${skill} is important for jop application with in 20 words`
    try {
        const result = await ai.models.generateContent({
            model: "gemini-2.5-flash-preview-09-2025",
            contents: prompt
        });
        if (result) {
            return result.text
        }
    } catch (error) {
        console.log(error)
        return "";
    }
}

export const JobMatchGenerate = async ({ ResumeSkill }: skilltype) => {
    const API_KEY = "AIzaSyADdHiPeoNHYdjDr1rbMh1WGZAfQkr9Lzs"
    const AllSkills = ResumeSkill.join(",")
    const prompt = `Act as a Job Recommendation AI Assistant.
                    Using the user's skills (${AllSkills}), suggest the 
                    top 3 suitable jobs.For each, respond as:
                    Job Title | Reason |  (≤ 15 words)`
    const ai = new GoogleGenAI({ apiKey: API_KEY })
    try {
        const result = await ai.models.generateContent({
            model: "gemini-2.5-flash-preview-09-2025",
            contents: prompt
        });
        if (result) {
            return result.text
        }
    } catch (error) {
        console.log(error)
        return "";
    }
}

export default generate 
