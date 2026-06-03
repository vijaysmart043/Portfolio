import { Metadata } from "next"
import { FullScreen } from "@/components/full-screen"
import { SkillsDisplay } from "./containers/skills-display"

export const metadata: Metadata = {
  title: "Skills | Ganta Vijay Raj",
  description:
    "Explore Ganta Vijay Raj's technical and soft skills - Programming Languages, Frontend Development, Database Management, and professional competencies.",
  keywords: [
    "Ganta Vijay Raj",
    "Technical Skills",
    "Soft Skills",
    "Programming Languages",
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "Full Stack Developer",
    "Computer Science Skills",
  ],
  openGraph: {
    title: "Skills | Ganta Vijay Raj",
    description:
      "Discover Ganta Vijay Raj's technical expertise in programming, web development, and database management, along with essential soft skills.",
    url: "#",
    siteName: "Ganta Vijay Raj",
    type: "website",
    locale: "en_US",
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills | Ganta Vijay Raj",
    description:
      "Explore technical and soft skills of Ganta Vijay Raj - Computer Science & Engineering Student.",
  },
  alternates: {
    canonical: "#",
  },
}

export default function Page() {
  return (
    <div>
      <FullScreen className="w-full xl:w-[85%] mx-auto">
        <SkillsDisplay />
      </FullScreen>
    </div>
  )
}

