import { Metadata } from "next"
import { ComingSoonPage } from "@/components/layout/coming-soon"

export const metadata: Metadata = {
  title: "About | Ganta Vijay Raj",
  description:
    "Learn more about Ganta Vijay Raj - Computer Science & Engineering Student, Full Stack Developer, Python and Java enthusiast, and tech explorer.",
  keywords: [
    "Ganta Vijay Raj",
    "About Ganta Vijay Raj",
    "Computer Science Student",
    "Full Stack Developer",
    "Python",
    "Java",
    "C++",
    "MERN Stack",
    "India Developer",
  ],
  openGraph: {
    title: "About | Ganta Vijay Raj",
    description:
      "Discover the story and journey of Ganta Vijay Raj in the world of computer science and web development.",
    url: "#",
    siteName: "Ganta Vijay Raj",
    type: "website",
    locale: "en_US",
    images: [
      // {
      //   url: "https://kinhdev.id.vn/images/seo/about-og-image.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "Ganta Vijay Raj About Page",
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Ganta Vijay Raj",
    description:
      "Learn more about Ganta Vijay Raj - Computer Science & Engineering Student and tech enthusiast.",
    // images: ["https://kinhdev.id.vn/images/seo/about-og-image.png"],
  },
  alternates: {
    canonical: "#",
  },
}

export default function Page() {
  return <ComingSoonPage pageName="About" />
}
