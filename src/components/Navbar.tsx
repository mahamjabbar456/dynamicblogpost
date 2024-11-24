"use client";
import React, { useState } from "react";
import {
     IconHome,
     IconHttpPost,
     IconArrowRoundaboutRight,
     IconPhoneCall
        } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody } from "./ui/sidebar";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
            {
              label: "Home",
              href: "/",
              icon: (
                <IconHome className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
              ),
            },
            {
              label: "About",
              href: "/about",
              icon: (
                <IconArrowRoundaboutRight className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
              ),
            },
            {
              label: "posts",
              href: "/posts",
              icon: (
                <IconHttpPost className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
              ),
            },
            {
              label: "Contact",
              href: "/contact",
              icon: (
                <IconPhoneCall className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
              ),
            },
];

const Navbar = () => {
    const [open,setOpen] = useState<boolean>(false);
  return (
    <div className={cn(
        "rounded-md flex flex-col md:flex-row bg-black dark:bg-neutral-900 w-full flex-1 mx-auto border border-neutral-700 dark:border-neutral-700 h-screen overflow-hidden"
    )}>
        <Sidebar open={open} setOpen={setOpen}>
            <SidebarBody>
              <div>
                 {open ? <Logo /> : <LogoIcon />}
              </div>
            </SidebarBody>
        </Sidebar>
      
    </div>
  )
}

export default Navbar

export const Logo = () =>{
    return (
        <Link href={'/'}
        className="font-normal flex space-x-2 items-center text-sm text-emerald-700 py-1"
        >
        <div className="h-5 w-6 bg-emerald-700  rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0">
         <motion.span
         initial={{opacity:0}}
         animate={{opacity:1}}
         className="font-medium text-emerald-700"
         >
            Maham Blog
         </motion.span>
        </div>
        </Link>
    )
}

export const LogoIcon = () =>{
    return(
        <></>
    )
}
