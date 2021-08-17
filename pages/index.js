import FeaturedPost from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

export const DUMMY_POSTS = [
  { 
    slug: 'getting-started-with-nextjs', 
    title: "Getting started with next", 
    image: 'getting-started-nextjs.png', 
    excerpt: 'Next.js gives you the best developer experience with all the features   you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.', 
    date : '2022-02-10'
  },
  { 
    slug: 'getting-started-with-nextjs-2', 
    title: "Getting started with next-2", 
    image: 'getting-started-nextjs.png', 
    excerpt: 'Next.js gives you the best developer experience with all the features   you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.', 
    date : '2021-08-18'
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPost posts ={DUMMY_POSTS} />
    </>
  )
}

// 1) Hero => Presente Ourselves
// 2) Featured Post Section