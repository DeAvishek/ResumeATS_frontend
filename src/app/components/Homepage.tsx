'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 flex items-center justify-center px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl w-full items-center">
        
        {/* Left: Image (2/3) */}
        <div className="md:col-span-2">
          <Image
            src="https://www.piclumen.com/wp-content/uploads/2024/11/random-image-generator-random-profile.webp" // 👈 Place your image in `public/` folder
            alt="Resume Analysis Illustration"
            width={700}
            height={500}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Right: Text + Buttons (1/3) */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Unlock Your Resume’s Potential
          </h1>
          <p className="text-lg text-white mb-8 font-bold">
            Upload your resume to get instant insights, job matches, and expert suggestions to level up your career.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link href="/analyzer">
              <Button className="px-6 py-3 text-lg w-full md:w-auto cursor-pointer">Explore</Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="px-6 py-3 text-lg w-full md:w-auto cursor-pointer">Learn More</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
