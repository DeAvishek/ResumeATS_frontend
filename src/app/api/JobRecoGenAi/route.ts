import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();
export async function POST(req:Request) {
    const {ResumeSkill} = await req.json();
    const API_KEY = process.env.GEN_AI_API_KEY
    const AllSkills = ResumeSkill.join(",")
    const prompt = `Act as a Job Recommendation AI Assistant.
                    Using the user's skills (${AllSkills}), suggest the 
                    top 3 suitable jobs and why this job with in 20 words
                    like: job|why`
    const ai = new GoogleGenAI({ apiKey: API_KEY })
    try {
        const result = await ai.models.generateContent({
            model: "gemini-2.5-flash-preview-09-2025",
            contents: prompt
        });
        if (result) {
           return new Response(
            JSON.stringify({
                result:result.text,
            }),{
                status:200
            }
           )
        }
    } catch (error) {
        return new Response(JSON.stringify({ success: false, message:error||"Internal server error" }), { status: 500 })
    }
}
