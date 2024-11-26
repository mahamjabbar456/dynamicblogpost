'use client';
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"
import Image from "next/image"
import {IoLocationOutline} from 'react-icons/io5'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="flex md:flex-row flex-col md:justify-center md:items-center pt-10 md:pt-0 h-screen bg-neutral-900 relative w-full overflow-hidden">
      <div className="text-emerald-500 w-full md:w-[50%] pl-10 order-2 md:order-1 pt-44 md:pt-0">
        <p className="text-lg mb-3">How can we help you?</p>
        <h2 className="text-5xl mb-8 font-semibold">Contact Us</h2>
        <p className="mb-3 tracking-wide text-base max-w-3xl">We are here to help and answer any questions you might have.We look forward to hearing from you!</p>
        <div className="flex gap-4 items-center mb-3">
            <IoLocationOutline className="w-7 h-7" />
            <p className="text-base">North Nazimbad Karachi Pakistan</p>
        </div>
        <div className="flex gap-5 items-center mb-3">
            <FaPhoneAlt className="w-5 h-5" />
            <p className="text-base">+923015898252</p>
        </div>
        <div className="flex gap-4 items-center mb-3">
            <MdOutlineMail className="w-7 h-7" />
            <p className="text-base">text@gmail.com</p>
        </div>
      </div>
      <div className="w-[50%] relative order-1 md:order-2">
        <Image src={'/contactpic.png'} alt="contact pic" width={400} height={100} className="absolute left-[50%] top-[50%] translate-x-[0px] translate-y-[0px] md:left-0 md:top-0 md:translate-x-0 md:translate-y-0 md:relative" />
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  )
}

export default Contact
