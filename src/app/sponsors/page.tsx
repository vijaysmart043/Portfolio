import { FullScreen } from "@/components/full-screen"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sponsors | Ganta Vijay Raj",
  description: "Sponsors of Ganta Vijay Raj",
}

export default function Page() {
  return (
    <FullScreen>
      <HoverBorderGradient
        containerClassName="rounded-[10px]"
        as="button"
        className="dark:bg-[#0d1117] bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer w-full"
      >
        <div className="w-full h-full flex items-center justify-center p-8">
          <p className="text-neutral-600 dark:text-neutral-400">
            Sponsor section coming soon
          </p>
        </div>
      </HoverBorderGradient>
    </FullScreen>
  )
}
