
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postsSlice';
import { useEffect } from 'react';

const PostsView = () => {
    const {isLoading, error, posts} = useSelector((state) => state.posts) || {}
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    return (
        <div>
            {isLoading && <p>loading .......</p>}
            {error && <p>{error.message}</p>}
           <section>
           {posts && posts.map((post,index) => <article key={index}>
                <h3>{post?.title}</h3>
                <p>{post?.body}</p>
            </article>)}
           </section>
        </div>
    );
};

export default PostsView;