'use client';
import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'
import React, { useEffect, useState } from 'react'
import blogPostContent from "@/data/postcontent.json";
import Image from 'next/image';
import { blogContent } from "@/data/post.json"
import Link from 'next/link';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { Button } from '@/components/ui/moving-border';
type postType = {
    slug: string,
    author: string,
    date: string,
    title: string,
    description:
    string,
    image: string,
    islatest: string
};
type postBlogType = {
    slug: string,
    author: string,
    date: string,
    title: string,
    introduction:string,
    description:
    string,
    features:string,
    conclusion:string,
    image: string
};

const heading1 = [
    {
        text: "Introduction",
        className: "text-xl font-semibold text-emerald-600 lg:text-2xl",
    }
]

const heading2 = [
    {
        text: "Description",
        className: "text-xl font-semibold text-emerald-600 lg:text-2xl",
    }
]

const heading3 = [
    {
        text: "Features",
        className: "text-xl font-semibold text-emerald-600 lg:text-2xl",
    }
]

const heading4 = [
    {
        text: "Conclusion",
        className: "text-xl font-semibold text-emerald-600 lg:text-2xl",
    }
]

const heading5 = [
    {
        text: "Latest",
        className: "text-xl font-semibold text-emerald-600 lg:text-2xl",
    },
    {
        text: "Posts",
        className: "text-xl font-semibold text-emerald-600 lg:text-2xl",
    }
]

const Posts = ({ params }: { params: Promise<{ slug: string }> }) => {
    const [slugPost, setSlugPost] = useState<postBlogType>();
    const [latestPost, setLatestPost] = useState<postType[]>([]);
    const [loading, setLoading] = useState(true);
    const [comment, setComment] = useState<string>("");
    // New state to store a list of comments
    const [commentsList, setCommentsList] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Resolve params to get the slug value
                const resolvedParams = await params;
                const slug = resolvedParams.slug;

                // Find the current post based on the slug
                const foundPost = blogPostContent.blogPostContent.find((post) => post.slug === `/posts/${slug}`);
                setSlugPost(foundPost);
                // Get latest posts
                const latest:postType[] = blogContent.filter((post) => post.islatest === "true");
                setLatestPost(latest);

                setLoading(false);
            } catch (error) {
                console.error("Error fetching post data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [params]);

    const handleSubmitComment = () => {
        if (comment.trim()) {
            setCommentsList([...commentsList, comment.trim()]);
            setComment(""); // Clear the comment input field
        }
    } 

    if (loading) {
        return (
            <div className="h-screen bg-neutral-900 flex flex-col items-center justify-center relative w-full">
                <p className='text-emerald-500 text-5xl font-semibold'>Loading...</p>
                <ShootingStars />
                <StarsBackground />
            </div>
        );
    }

    if (!slugPost) {
        return (
            <div className="h-screen bg-neutral-900 flex flex-col items-center justify-center relative w-full">
                <p className='text-emerald-500 text-5xl font-semibold'>Post is not available</p>
                <ShootingStars />
                <StarsBackground />
            </div>
        )
    }

    // Split the features by '.' and filter out any empty strings
    const featuresList = slugPost.features.split('.').filter((feature: string) => feature.trim() !== '');
    return (
        <div className="h-screen bg-neutral-900 flex flex-col lg:flex-row  lg:items-start lg:justify-between relative w-full text-emerald-500 overflow-y-scroll overflow-x-hidden">
            <div className='lg:w-[60%] w-full px-4 pt-4 lg:pt-8 min-h-screen flex-grow-0 flex-shrink-0'>
                <h1 className='lg:text-5xl font-semibold text-3xl mb-4 tracking-wide'>{slugPost.title}</h1>
                <p className='text-sm text-emerald-400'>Author of this post : <span className='text-base text-emerald-600 font-semibold'>{slugPost.author}</span></p>
                <p className='text-sm text-emerald-400 mb-2'>Date : <span className='text-base text-emerald-600 font-semibold'>{slugPost.date}</span></p>
                <TypewriterEffectSmooth words={heading1} className='mb-0' />
                <p className='text-[14px] text-justify tracking-wide mb-4'>{slugPost.introduction}</p>
                <TypewriterEffectSmooth words={heading2} className='mb-0' />
                <p className='text-[14px] text-justify tracking-wide mb-4'>{slugPost.description}</p>
                <figure className='w-80 lg:w-[90%] mx-auto lg:mx-0'>
                    <Image src={slugPost.image} alt={slugPost.title} width={100} height={100} className='w-full h-full mb-4' />
                </figure>
                <TypewriterEffectSmooth words={heading3} className='mb-0' />
                <ul className='list-disc pl-5 mb-4'>
                    {featuresList.map((feature: string, index: number) => (
                        <li key={index} className='text-[14px] text-justify tracking-wide mb-2'>{feature.trim()}.</li>
                    ))}
                </ul>
                <TypewriterEffectSmooth words={heading4} className='mb-0' />
                <p className='text-[14px] text-justify tracking-wide mb-4'>{slugPost.conclusion}</p>
                <p className="text-xl font-semibold text-emerald-600 lg:text-2xl mb-2">Comments</p>
                {/* Display the list of submitted comments */}
                <div className="mb-4">
                    {commentsList.length > 0 ? (
                        <ul className="list-disc pl-5">
                            {commentsList.map((item,index)=>(
                                <li key={index} className="text-[14px] text-justify tracking-wide mb-2">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-[14px] text-justify tracking-wide mb-2">No comments yet. Be the first to comment!</p>
                    )}
                </div>
                <textarea rows={5} className='bg-transparent border border-emerald-500 outline outline-emerald-500 rounded-md mb-4 text-emerald-500 p-4 w-[100%]' placeholder='Please write comments' onChange={(e) => setComment(e.target.value)}
                value={comment}
                // onKeyPress={handleKeyPress}
                    ></textarea>
                <Button onClick={handleSubmitComment}>Submit Comment</Button>
            </div>
            <div className="w-full lg:w-[30%] flex flex-col items-center justify-center flex-grow-0 flex-shrink-0">
                <TypewriterEffectSmooth words={heading5} className='mb-0' />
                <div className='sm:flex-row lg:flex-col'>
                    {latestPost.length > 0 ? (
                        latestPost.map((post) => (
                            <div key={post.slug} className="w-80 mb-5">
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
                                        <h2 className="font-bold my-4 text-lg text-emerald-900">{post.title}</h2>
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
            </div>
            <ShootingStars />
            <StarsBackground />
        </div>
    )
}

export default Posts
