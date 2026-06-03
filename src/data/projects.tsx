import React from "react"

export const PROJECTS = [
  {
    category: "Travel & Navigation",
    title: "Flight Finder",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-600 dark:text-neutral-400">
          A comprehensive flight search and booking platform that helps users navigate air travel options and find the best flights. The application allows users to search for flights to various destinations, compare prices across multiple airlines, and track price changes in real-time.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400">
          Features include flexible route optimization based on multiple destinations and travel dates, integrated comparison tools similar to Skyscanner and Momondo, and intelligent price tracking to help users find the best deals.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm">HTML</span>
          <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm">CSS</span>
          <span className="px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm">JavaScript</span>
          <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm">Python</span>
        </div>
      </div>
    ),
    src: "/images/mockup/hivello_mockup.png",
    techStack: ["HTML", "CSS", "JavaScript", "Python"],
  },
  {
    category: "AI Assistant",
    title: "FRIDAY AI",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-600 dark:text-neutral-400">
          FRIDAY-AI (Friendly Responsive Intelligent Digital Assistant for You) is an advanced voice-controlled personal assistant built using Python, Google Gemini AI, and advanced speech recognition technologies.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400">
          The application features a conversational interface powered by Geminis generative AI capabilities and a user-friendly GUI built with Tkinter. It provides intelligent responses, natural language understanding, and seamless voice interaction for an enhanced user experience.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm">Python</span>
          <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm">Google Gemini AI</span>
          <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm">Speech Recognition</span>
          <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm">Tkinter</span>
        </div>
      </div>
    ),
    src: "/images/mockup/growing_mockup.png",
    techStack: ["Python", "Google Gemini AI", "Speech Recognition", "Tkinter"],
  },
  {
    category: "Achievements & Certifications",
    title: "Professional Certifications & Internships",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-600 dark:text-neutral-400">
          Throughout my academic journey, I have completed multiple internships and certifications to enhance my technical skills and gain practical experience:
        </p>
        <div className="space-y-3 mt-4">
          <div className="flex gap-2 items-start">
            <span className="text-green-500 mt-1">✅</span>
            <div>
              <p className="text-neutral-700 dark:text-neutral-300 font-medium">AWS Cloud Virtual Internship</p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Apr-Jun 2024</p>
            </div>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-green-500 mt-1">✅</span>
            <div>
              <p className="text-neutral-700 dark:text-neutral-300 font-medium">Edu-skills Academy Ethical Hacking Virtual Internship</p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Jul-Sep 2024</p>
            </div>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-green-500 mt-1">✅</span>
            <div>
              <p className="text-neutral-700 dark:text-neutral-300 font-medium">Fortinet Network Security Associate Virtual Internship</p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Oct-Dec 2024</p>
            </div>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-green-500 mt-1">✅</span>
            <div>
              <p className="text-neutral-700 dark:text-neutral-300 font-medium">Microchip Embedded System Developer Internship</p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Jan-Mar 2025</p>
            </div>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-green-500 mt-1">✅</span>
            <div>
              <p className="text-neutral-700 dark:text-neutral-300 font-medium">Python Full Stack Developer Virtual Internship</p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Apr-Jun 2025</p>
            </div>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-green-500 mt-1">✅</span>
            <div>
              <p className="text-neutral-700 dark:text-neutral-300 font-medium">Cyber Security with Kali Linux by APSSDC Summer Internship</p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Jun-Jul 2024</p>
            </div>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-green-500 mt-1">✅</span>
            <div>
              <p className="text-neutral-700 dark:text-neutral-300 font-medium">Full Stack Developer (MERN Stack) Summer Internship</p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Jun-Jul 2025</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm">AWS Cloud</span>
          <span className="px-3 py-1 rounded-full bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-sm">Ethical Hacking</span>
          <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm">Network Security</span>
          <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm">Embedded Systems</span>
          <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm">Full Stack</span>
          <span className="px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm">MERN Stack</span>
        </div>
      </div>
    ),
    src: "/images/mockup/tracki_mockup.png",
    techStack: ["AWS Cloud", "Ethical Hacking", "Network Security", "Embedded Systems", "Full Stack", "MERN Stack"],
  },
]
