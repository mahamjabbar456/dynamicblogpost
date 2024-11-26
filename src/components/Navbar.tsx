"use client";
import React, { useState } from "react";
import {
     IconHome,
     IconHttpPost,
     IconArrowRoundaboutRight,
     IconPhoneCall
        } from "@tabler/icons-react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const links = [
            {
              label: "Home",
              href: "/",
              icon: (
                <IconHome className="text-emerald-500 dark:text-emerald-500 h-5 w-5 flex-shrink-0" />
              ),
            },
            {
              label: "About",
              href: "/about",
              icon: (
                <IconArrowRoundaboutRight className="text-emerald-500 dark:text-emerald-500 h-5 w-5 flex-shrink-0" />
              ),
            },
            {
              label: "Posts",
              href: "/posts",
              icon: (
                <IconHttpPost className="text-emerald-500 dark:text-emerald-500 h-5 w-5 flex-shrink-0" />
              ),
            },
            {
              label: "Contact",
              href: "/contact",
              icon: (
                <IconPhoneCall className="text-emerald-500 dark:text-emerald-500 h-5 w-5 flex-shrink-0" />
              ),
            },
];

const Navbar = () => {
    const [open,setOpen] = useState<boolean>(false);
  return (
    <div className="md:h-screen">
        <Sidebar open={open} setOpen={setOpen}>
            <SidebarBody className="justify-between gap-10">
              <div className="flex flex-col flex-1 md:overflow-y-auto md:overflow-x-hidden">
                 {open ? <Logo /> : <LogoIcon />}
                 <div>
                    {links.map((link,idx)=>(
                        <SidebarLink key={idx} link={link} />
                    ))}
                 </div>
              </div>
              <div>
              <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <Image
                    src="https://img.freepik.com/free-vector/young-man-orange-hoodie_1308-175788.jpg?t=st=1732433263~exp=1732436863~hmac=678965d21e55488182d761ddf14f0f2ec98b535adc8bf756b602a22e58fc22ba&w=360"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
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
        className="font-normal flex space-x-2 items-center text-base text-emerald-700 py-1 pb-10 relative z-20"
        >
        <div className="h-5 w-6 bg-emerald-500  rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0">
         <motion.span
         initial={{opacity:0}}
         animate={{opacity:1}}
         className="font-bold pl-8 text-emerald-700 whitespace-pre"
         >
            Maham Blog
         </motion.span>
        </div>
        </Link>
    )
}

export const LogoIcon = () =>{
    return(
        <Link href={'/'}
        className="font-normal flex space-x-2 items-center text-sm text-emerald-500 py-1 pb-10"
        >
        <div className="h-5 w-6 bg-emerald-700  rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0">
        </div>
        </Link>
    )
}

