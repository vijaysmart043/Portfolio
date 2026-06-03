import { LayoutWithHeader } from "@/components/layout/layout-with-header"
import { ThemeProvider } from "@/components/theme-provider"
import "@/styles/globals.css"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"

import { Exo_2 } from "next/font/google"

const exo2 = Exo_2({
  subsets: ["latin", "vietnamese", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-exo2",
})

export const metadata: Metadata = {
  title: "Ganta Vijay Raj | Computer Science & Engineering Student Portfolio",
  description:
    "Explore Ganta Vijay Raj's portfolio – a motivated Computer Science & Engineering student specializing in Full Stack Development, Python, Java, and modern web technologies. Showcasing innovative projects, technical skills, and hands-on experience.",
  keywords: [
    "Computer Science Student",
    "Full Stack Developer",
    "Python Developer",
    "Java Developer",
    "Ganta Vijay Raj Portfolio",
    "Web Development",
    "MERN Stack",
    "JavaScript",
    "C++",
    "Modern Web Technologies",
  ],
  openGraph: {
    title: "Ganta Vijay Raj | Computer Science & Engineering Student Portfolio",
    description:
      "Discover Ganta Vijay Raj's expertise in Computer Science, Full Stack Development, Python, and Java. View projects, internships, and technical skills.",
    url: "#",
    type: "website",
    images: [
      {
        url: "https://voocgavdbpy2gucg.public.blob.vercel-storage.com/open-graph-6fkPvt3jl60AhDWy2pPhfp3PKoZPrZ.png",
        width: 1200,
        height: 630,
        alt: "Ganta Vijay Raj - Computer Science & Engineering Student Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganta Vijay Raj | Computer Science & Engineering Student Portfolio",
    description:
      "Explore Ganta Vijay Raj's projects and expertise in Full Stack Development, Python, Java, and modern web technologies.",
    images: [
      "https://voocgavdbpy2gucg.public.blob.vercel-storage.com/open-graph-6fkPvt3jl60AhDWy2pPhfp3PKoZPrZ.png",
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${exo2.variable} antialiased scroll-smooth w-full max-w-dvw overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <LayoutWithHeader>{children}</LayoutWithHeader>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
