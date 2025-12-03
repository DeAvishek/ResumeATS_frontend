import { GoogleGenAI } from "@google/genai";
import { string } from "zod";
type skilltype={
    skill:string
}
export const skillmap = new Map<string,string>(null)
const generate=async({skill}:skilltype)=>{
    const API_KEY = "AIzaSyDtH__t3bH3N3Vzpgd6kZbde2sGpX2UvWs"
    const ai = new GoogleGenAI({apiKey:API_KEY})
    const prompt = `You are an AI assintant who discuss why ${skill} is important for jop application with in 20 words`
    try{
        const result = await ai.models.generateContent({
            model:"gemini-2.5-flash",
            contents:prompt
        });
        if(result){
            console.log(result.text);
            let why = result.text
            skillmap.set(skill,why||"empty")
        }
    }catch{

    }
}
export default generate