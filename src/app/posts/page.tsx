'use client';
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import { blogContent } from "@/data/post.json"
import Link from "next/link";

type postType = {
  slug: string,
  author: string,
  date: string,
  title: string,
  description:
  string,
  image: string,
  islatest: string
} ;
const words = [
  {
    text: "Latest",
    className: "text-emerald-500 dark:text-emerald-500",
  },
  {
    text: "Posts",
    className: "text-emerald-700 dark:text-emerald-700",
  },
];
const words1 = [
  {
    text: "Featured",
    className: "text-emerald-500 dark:text-emerald-500",
  },
  {
    text: "Posts",
    className: "text-emerald-700 dark:text-emerald-700",
  },
];


const Posts = () => {
  const latestPost: postType[] = blogContent.filter((post) => post.islatest === "true");
  // const featuredPost: postType[] = blogContent.filter((post) => post.islatest !== "true");
  return (
    <div className="h-screen bg-neutral-900 relative w-full overflow-y-scroll">
      <TypewriterEffectSmooth words={words} />
      <div className="flex md:flex-row flex-col w-full items-center justify-center gap-20 overflow-x-hidden flex-wrap px-1 md:px-0">
        {latestPost.length > 0 ? (
          latestPost.map((post) => (
            <div key={post.slug} className="w-80">
              <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-emerald-300 dark:bg-emerald-300 hover:shadow-xl border border-zinc-100">
                <div className="w-full h-[200px] bg-emerald-300 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                  <Image
                    src={post.image}
                    alt="thumbnail"
                    fill
                    className="group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200"
                  />
                </div>
                <div className="p-4">
                  <h2 className="font-bold my-4 text-lg text-emerald-900 dark:text-emerald-900">{post.title}</h2>
                  <h2 className="font-normal my-4 text-sm text-emerald-700">{post.description}</h2>
                  <div className="flex flex-row justify-between items-center mt-10">
                    <span className="text-sm text-emerald-700">{post.date}</span>
                    <Link href={post.slug}>
                    <div className="relative z-10 px-6 py-2 bg-black text-emerald-400 font-bold rounded-xl block text-xs">
                      Read More
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-white">No latest posts available</div>
        )}
      </div>
      <TypewriterEffectSmooth words={words1} />
      <div className="flex md:flex-row flex-col w-full items-center justify-center gap-20 overflow-x-hidden flex-wrap px-1 md:px-0">
        {blogContent.map((post) => (
            <div key={post.slug} className="w-80">
              <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-emerald-300 hover:shadow-xl border border-zinc-100">
                <div className="w-full h-[200px] bg-emerald-300 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                  <Image
                    src={post.image}
                    alt="thumbnail"
                    fill
                    className="group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200"
                  />
                </div>
                <div className="p-4">
                  <h2 className="font-bold my-4 text-lg text-emerald-900 dark:text-emerald-900">{post.title}</h2>
                  <h2 className="font-normal my-4 text-sm text-emerald-700">{post.description}</h2>
                  <div className="flex flex-row justify-between items-center mt-10">
                    <span className="text-sm text-emerald-700">{post.date}</span>
                    <Link href={post.slug}>
                    <div className="relative z-10 px-6 py-2 bg-black text-emerald-400 font-bold rounded-xl block text-xs">
                      Read More
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
}
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  )
}

export default Posts