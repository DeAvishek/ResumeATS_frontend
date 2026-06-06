
import dotenv from "dotenv";
import { HfInference } from "@huggingface/inference";
import { pipeline } from "@xenova/transformers"
dotenv.config();
<<<<<<< HEAD
export async function POST(req: Request) {
    const { ResumeSkill } = await req.json();
    const HfToken = process.env.HF_TRANSFORMER_API_KEY
    const AllSkills = ResumeSkill.join(",")
    console.log(HfToken)
    const clinet = new HfInference(HfToken)
    // Improved prompt for better results:
    const prompt = `Based on these skills: ${AllSkills}
                    Recommend 3 suitable job titles and briefly explain why (max 20 words each).
                    Format exactly:
                    1. [Job Title] - [Brief reason]
                    2. [Job Title] - [Brief reason]
                    3. [Job Title] - [Brief reason] Recommendations:`;
    const generator = await pipeline('text-generation', 'Xenova/flan-t5-small');

    try {

        const response = await generator(prompt, {
            max_new_tokens: 200,           // Increased for 3 jobs
    temperature: 0.8,              // Slightly higher for creativity
    top_p: 0.9,
    do_sample: true,
    repetition_penalty: 1.2,       // Reduces repetition
    num_beams: 3,                  // Better quality (optional)
    no_repeat_ngram_size: 2   

        })


        console.log(response)
        if (response) {
            return new Response(
                JSON.stringify({
                    result: response[0].generated_text
                }), {
                status: 200
=======
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
>>>>>>> f182131 (fixing the ai recomendation thing)
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