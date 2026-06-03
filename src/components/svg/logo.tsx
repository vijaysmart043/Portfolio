import { SVGProps } from "@/types/global"
import React from "react"

export const Logo = (props: SVGProps) => {
  return (
    <img 
      src="/logo.svg"
      alt="Logo"
      className={props.className || "h-50 w-50"}
      style={{ width: "100px", height: "100px" }}
    />
  )
}
