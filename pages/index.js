import FeaturedPost from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/post-util";


export default function Home({posts}) {
  return (
    <>
      <Hero />
      <FeaturedPost posts ={posts} />
    </>
  )
}

// 1) Hero => Presente Ourselves
// 2) Featured Post Section

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts : featuredPosts
    },
    revalidate: 180
  }
}