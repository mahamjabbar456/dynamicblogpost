'use client';
import AboutSection from "@/components/AboutSection";
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"
const About = () => {
    return (
        <>
            <div
                className="h-screen bg-neutral-900 relative w-full overflow-y-scroll"
                style={{
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/aboutpic.jpg')",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >

                <div className="text-emerald-500 flex flex-col items-center justify-center px-4 pt-20 tracking-tight gap-10">
                    
                    <AboutSection title="About Us" description="Welcome to Maham Blog, your go-to source for the latest insights, trends, and innovations in the world of technology. We are passionate about the digital frontier, exploring how today's advancements are reshaping our lives and what the future holds. From groundbreaking AI developments to cutting-edge cybersecurity solutions, we're here to keep you informed, inspired, and ahead of the curve." />

                    <AboutSection title="Our Mission" description="Our mission is simple: to make advanced technology accessible, understandable, and engaging for everyone. In a world that&apos;s rapidly evolving, we aim to be your trusted guide—whether you&apos;re a tech enthusiast, an industry professional, or someone just curious about the next big thing" />
                    <AboutSection title="Why We Do It" description="Technology is more than just innovation; it&apos;s a catalyst for change. We believe that by sharing knowledge, we can empower individuals, businesses, and communities to harness the potential of technology. Our goal is to bridge the gap between cutting-edge research and everyday application, making sure our readers are well-prepared for a tech-driven future." />

                    <AboutSection title="Our Team" description="We are a diverse group of tech enthusiasts, researchers, writers, and industry professionals dedicated to delivering high-quality, informative content. Our team combines expertise with a passion for all things tech, ensuring that each article, review, and tutorial is accurate, engaging, and valuable." />

                    <AboutSection title="Get in Touch" description="Have questions, feedback, or a topic you&apos;d like us to cover? Feel free to reach out! We&apos;re always open to hearing from our readers and collaborating with like-minded individuals and companies who share our passion for tech." />
                </div>
                <ShootingStars />
                <StarsBackground />
            </div>
        </>
    )
}

export default About
