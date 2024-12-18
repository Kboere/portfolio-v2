"use client"

import { animatePageIn } from "@/utils/animations";
import { useEffect } from "react"

export default function Template({ children }) {
        useEffect(() => {
            animatePageIn();
        }, []);
    return(
        <main className="relative">
            <div id="banner-1" className="min-h-screen bg-[#CFE2F2] z-20 fixed top-0 left-0 w-full"></div>
            {children}
        </main>
    )
  }