import { GoogleGenAI } from "@google/genai";
export async function POST(req:Request) {
    const {AllSkills} = await req.json();
    const API_KEY = process.env.GEN_AI_API_KEY
    console.log("this is resume skills...",AllSkills)
    const prompt = `Act as a Job Recommendation AI Assistant.
                    Using the user's skills (${AllSkills}), suggest the 
                    top 3 suitable jobs and why this job with in 20 words
                    like: job|why`
    const ai = new GoogleGenAI({ apiKey: API_KEY })
    try {
        const result = await ai.models.generateContent({
            model: "gemini-2.5-flash",
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
        console.log(error)
        return new Response(JSON.stringify({ success: false, message: error || "Internal server error" }), { status: 500 })
    }
}

// const response = await fetch(
//     "https://api-inference.huggingface.co/models/gpt2",
//     {
//         method: "POST",
//         headers: {
//             "Authorization": `Bearer ${HfToken}`,
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             inputs: prompt,
//             parameters: {
//                 max_new_tokens: 150,
//                 temperature: 0.7,
//                 return_full_text: false
//             }
//         })
//     }
// );