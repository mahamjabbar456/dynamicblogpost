"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
export default function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="h-screen bg-neutral-900 flex flex-col items-center justify-center relative w-full">
      <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-emerald-400 to-emerald-700 flex items-center gap-2 md:gap-8">
        <span>Advanced Technology</span>
        <span className="text-emerald-500 text-lg font-thin">x</span>
        <span>Dynamic Post Website</span>
      </h2>
      <p className="relative z-10 text-lg md:leading-tight md:max-w-5xl px-5 md:px-0 text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-emerald-400 to-emerald-700 pb-2">Dive into the cutting-edge world of technology, where we explore the latest advancements and transformative trends shaping our future. From artificial intelligence and machine learning to cybersecurity and cloud innovations, we're your gateway to the forefront of digital evolution.</p>
      <Link href={'/posts'}>
      <Button
        borderRadius="1.75rem"
        className="relative z-10 bg-slate-800 dark:bg-slate-800 text-emerald-500 dark:text-emerald-500 border-emerald-500 dark:border-emerald-500 font-bold text-base"
      >
        Explore Post
      </Button>
      </Link>
      <Image src={'/herosectionpic.png'} alt="hero section" fill
    className="object-contain" />
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
