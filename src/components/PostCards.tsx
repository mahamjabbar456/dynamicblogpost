import Image from "next/image"
import {blogContent} from "@/data/post.json"

type postType = {
    slug: string,
    author: string,
    date: string,
    title: string,
    description:
          string,
          image: string,
          islatest:string
} | undefined;

const PostCards = () => {
    const latestPost:postType = blogContent.filter((post)=>post.islatest === "true");
    console.log(latestPost)
  return (
        <div className="w-80">
        <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-emerald-300 hover:shadow-xl border border-zinc-100">
          <div className="w-full h-[200px] bg-emerald-300 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
            <Image
              src={latestPost.image}
              alt="thumbnail"
              fill
            //   objectFit="cover"
              className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200`}
            />
          </div>
          <div className=" p-4">
            <h2 className="font-bold my-4 text-lg text-emerald-900">
              {latestPost.title}
            </h2>
            <h2 className="font-normal my-4 text-sm text-emerald-700">
              {latestPost.description}
            </h2>
            <div className="flex flex-row justify-between items-center mt-10">
              <span className="text-sm text-emerald-700">{latestPost.date}</span>
              <div className="relative z-10 px-6 py-2 bg-black text-emerald-400 font-bold rounded-xl block text-xs">
                Read More
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PostCards
