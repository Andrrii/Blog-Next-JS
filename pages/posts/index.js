import AllPosts from "../../components/posts/all-post";
import { getAllPosts } from "../../lib/post-util";


function AllPostsPage({allPosts}) {

    return (
        <AllPosts posts = {allPosts} />
    )
}

export function getStaticProps() {
    
    const allPosts = getAllPosts()

    return {
        props:{
            allPosts
        },
        revalidate:180
    }
}

export default AllPostsPage;