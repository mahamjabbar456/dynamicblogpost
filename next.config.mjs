/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["assets.aceternity.com","img.freepik.com","images.unsplash.com","plus.unsplash.com","media.istockphoto.com"]
    }
    ,
  eslint : {
    ignoreDuringBuilds : true,
}
};

export default nextConfig;
