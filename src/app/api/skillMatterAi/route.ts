import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { skill } = await req.json();

        if (!skill) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Skill is required"
                },
                {
                    status: 400
                }
            );
        }

        const API_KEY = process.env.GEN_AI_API_KEY;
        console.log("this is api key..",API_KEY)
        if (!API_KEY) {
            return NextResponse.json(
                {
                    success: false,
                    message: "API key is missing"
                },
                {
                    status: 500
                }
            );
        }

        const ai = new GoogleGenAI({
            apiKey: API_KEY
        });

        const prompt = `
        You are an AI assistant.
        Explain why ${skill} is important for job applications in under 20 words.
        `;

        const result = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt
        });
        const response = result.text
        return NextResponse.json(
            {
                success: true,
                result: response
            },
            {
                status: 200
            }
        );

    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message:
                    error instanceof Error
                        ? error.message
                        : "Internal server error"
            },
            {
                status: 500
            }
        );
    }
}