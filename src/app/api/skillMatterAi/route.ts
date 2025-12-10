import { GoogleGenAI } from "@google/genai";
export async function POST(req:Request) {
    const {skill} = await req.json()
    const API_KEY = process.env.GEN_AI_API_KEY
    const ai = new GoogleGenAI({ apiKey: API_KEY })
    const prompt = `You are an AI assintant who discuss why ${skill} is important for job application with in 20 words`
    if(!API_KEY){
        return new Response(
                JSON.stringify({
                    result:"Api key is not loaded"
                }),{
                    status:400
                }
            )
    }
    try {
        const result = await ai.models.generateContent({
            model: "gemini-2.5-flash-preview-09-2025",
            contents: prompt
        });
        
        if (result) {
            return new Response(
                JSON.stringify({
                    result:result.text
                }),{
                    status:200
                }
            )
        }
    } catch (error) {
        return new Response(JSON.stringify({ success: false, message:error||"Internal server error" }), { status: 500 })
    }
}