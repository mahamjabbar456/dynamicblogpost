import Image from "next/image"
import { FollowerPointerCard } from "./ui/following-pointer"

const blogContent = {
    slug: "amazing-tailwindcss-grid-layouts",
    author: "Manu Arora",
    date: "28th March, 2023",
    title: "Amazing Tailwindcss Grid Layout Examples",
    description:
      "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
    image: "https://images.unsplash.com/photo-1732460486027-4a576738063b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorAvatar: "/manu.png",
  };
   
  const TitleComponent = ({
    title,
    avatar,
  }: {
    title: string;
    avatar: string;
  }) => (
    <div className="flex space-x-2 items-center">
      <Image
        src={'https://img.freepik.com/free-vector/young-man-orange-hoodie_1308-175788.jpg?t=st=1732433263~exp=1732436863~hmac=678965d21e55488182d761ddf14f0f2ec98b535adc8bf756b602a22e58fc22ba&w=360'}
        height="20"
        width="20"
        alt="thumbnail"
        className="rounded-full border-2 border-white"
      />
      <p>{title}</p>
    </div>
  );

const PostCards = () => {
  return (
    <div className="flex ">
        <div className="w-80">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={blogContent.author}
            avatar={blogContent.authorAvatar}
          />
        }
      >
        <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          <div className="w-full h-[200px] bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
            <Image
              src={blogContent.image}
              alt="thumbnail"
              // width={100}
              // height={100}
              layout="fill"
              objectFit="cover"
              className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
            />
          </div>
          <div className=" p-4">
            <h2 className="font-bold my-4 text-lg text-zinc-700">
              {blogContent.title}
            </h2>
            <h2 className="font-normal my-4 text-sm text-zinc-500">
              {blogContent.description}
            </h2>
            <div className="flex flex-row justify-between items-center mt-10">
              <span className="text-sm text-gray-500">{blogContent.date}</span>
              <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                Read More
              </div>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
    </div>
  )
}

export default PostCards
