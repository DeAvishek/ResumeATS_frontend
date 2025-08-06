"use client";

import React, { useState } from "react";
import { Upload } from "lucide-react";

const Page = () => {
    const [jobdesc, setJobdesc] = useState("");
    const [file, setFile] = useState<File | null>(null);


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6">
            <form
                className="bg-gradient-to-r from-green-200 to-yellow-200 shadow-lg rounded-2xl p-8 w-full max-w-4xl "
            >
                <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
                    Upload Your Resume
                </h1>

                <div className="flex flex-col md:flex-row gap-6">
                    {/* Job Description */}
                    <div className="flex-1">
                        <label htmlFor="jobdesc" className="block text-lg font-bold text-gray-700 mb-2">
                            <h1>Job Description</h1>
                        </label>
                        <textarea
                            id="jobdesc"
                            name="jobdesc"
                            //   value={jobdesc}
                            //   onChange={(e) => setJobdesc(e.target.value)}
                            placeholder="Enter your Job description here"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
                            rows={5}
                        />
                    </div>

                    {/* File Upload */}
                    <div className="flex-1 flex flex-col justify-center">
                        <label
                            htmlFor="resume"
                            className="block text-lg font-bold text-gray-700 mb-2"
                        >
                            Resume File
                        </label>
                        <label
                            htmlFor="resume"
                            className="cursor-pointer border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-6 hover:border-indigo-500 transition"
                        >
                            <Upload className="w-10 h-10 text-indigo-500 mb-2" />
                            <span className="text-gray-600">
                                {file ? file.name : "Click to select file"}
                            </span>
                            <input
                                id="resume"
                                type="file"
                                name="resume"
                                // onChange={(e) => setFile(e.target.files?.[0] || null)}
                                className="hidden"
                            />
                        </label>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="mt-6 w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium py-3 px-4 rounded-lg shadow hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Page;
