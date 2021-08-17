import { DUMMY_POSTS } from "..";
import AllPosts from "../../components/posts/all-post";


function AllPostsPage() {

    return (
        <AllPosts posts = {DUMMY_POSTS} />
    )
}

export default AllPostsPage;