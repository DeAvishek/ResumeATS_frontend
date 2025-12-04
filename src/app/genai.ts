import { GoogleGenAI } from "@google/genai";

type skilltype={
    skill:string
}
export const skillmap = new Map<string,string>(null)
const generate=async({skill}:skilltype)=>{
    const API_KEY = "AIzaSyDIFyrCz932yR2JddmdHC6YLqoxLqjBH8k"
    const ai = new GoogleGenAI({apiKey:API_KEY})
    const prompt = `You are an AI assintant who discuss why ${skill} is important for jop application with in 20 words`
    try{
        const result = await ai.models.generateContent({
            model:"gemini-2.5-flash-preview-09-2025",
            contents:prompt
        });
        if(result){
            console.log(result.text||"")
            skillmap.set(skill,result.text||"")
            return result.text
        }
    }catch(error){
        console.log(error)
        return "";
    }
}
export default generate
