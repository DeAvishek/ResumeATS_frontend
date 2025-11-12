"use client"
import React, { useState } from "react";
import { Upload } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Progressbar from "@/app/components/Progressbar";
import SkillDataSore from "@/app/store/skill_store";
const Page = () => {
    const url = process.env.BACKEND_URL;
    const router = useRouter();
    const [jobdesc, setJobdesc] = useState<string>("");
    const [file, setFile] = useState<File | null>(null);
    const [isSubmit, setisSubmit] = useState<boolean>(false);
    const set_skills = SkillDataSore((state)=>state.set_skill)
    const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!file || !jobdesc) {
            window.alert("Incomplete details");
            return;
        }
        const formData = new FormData();
        formData.append("jobdesc", jobdesc);
        formData.append("file", file);

        try {
            setisSubmit(true);
            const response = await axios.post(`http://127.0.0.1:8000/analyze/upload`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            if (response.data.status == 200) {
                set_skills(response.data.resume_skill,response.data.job_skill,response.data.score)
                setTimeout(() => {
                    router.push("/dashboard");
                }, 3000);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
            <form
                className="shadow-2xl rounded-2xl p-8 w-full max-w-4xl bg-white/90 backdrop-blur-lg border border-gray-200"
                onSubmit={handlesubmit}
                style={{
                    backgroundImage: "url('https://cdn-thumbnails.huggingface.co/social-thumbnails/spaces/Amruth18/ResumeAnalyzer.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="bg-white/80 rounded-2xl p-6">
                    <h1 className="text-3xl font-extrabold mb-6 text-indigo-900 text-center">
                        Upload Your Resume
                    </h1>

                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Job Description */}
                        <div className="flex-1">
                            <label
                                htmlFor="jobdesc"
                                className="block text-lg font-semibold text-gray-800 mb-2"
                            >
                                Job Description
                            </label>
                            <textarea
                                id="jobdesc"
                                name="jobdesc"
                                value={jobdesc}
                                onChange={(e) => setJobdesc(e.target.value)}
                                placeholder="Enter your job description here..."
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                                rows={5}
                            />
                        </div>

                        {/* File Upload */}
                        <div className="flex-1 flex flex-col justify-center">
                            <label
                                htmlFor="resume"
                                className="block text-lg font-semibold text-gray-800 mb-2"
                            >
                                Resume File
                            </label>
                            <label
                                htmlFor="resume"
                                className="cursor-pointer border-2 border-dashed border-gray-400 rounded-lg flex flex-col items-center justify-center p-6 hover:border-indigo-500 transition"
                            >
                                <Upload className="w-10 h-10 text-indigo-500 mb-2" />
                                <span className="text-gray-600 text-center">
                                    {file ? file.name : "Click to select file"}
                                </span>
                                <input
                                    id="resume"
                                    type="file"
                                    name="resume"
                                    onChange={(e) =>
                                        setFile(e.target.files?.[0] || null)
                                    }
                                    className="hidden"
                                />
                            </label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="mt-6 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition disabled:opacity-70"
                        disabled={isSubmit}
                    >
                        {isSubmit ? <Progressbar/>: "Submit"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Page;
