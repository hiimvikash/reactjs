import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { selectAllPosts, getPostsStatus, getPostsError  } from "./postsSlice";
import { Link } from "react-router-dom";
const PostsList = () => {

    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    let renderedPosts;
    if (postStatus === 'loading') {
        renderedPosts = <p>"Loading..."</p>;
    }
    else if (postStatus === 'succeeded') {
        renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p className="excerpt">{post.body.substring(0, 75)}...</p>
            <p className="postCredit">
                <Link to={`post/${post.id}`}>View Post</Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post}/>
        </article>
    ))
    }
    else if (postStatus === 'failed') {
        renderedPosts = <p>{error}</p>;
    }
    
    
    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}
export default PostsList