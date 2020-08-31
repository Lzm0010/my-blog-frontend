import React, {Fragment} from 'react';
import useFetch from '../../hooks/useFetch';

function BlogPostPreviews () {
    const baseUrl = `http://localhost:3000`;
    const postsUrl = `${baseUrl}/posts`;

    const [response, loading, hasError] = useFetch(postsUrl);

    const displayPosts = () => {
       return response.map(post => <div>{post.title}</div>)
    }

    return(
        <Fragment>
            {
                loading ? <div>Loading...</div> : hasError ? 
                (<div>Failed to fetch posts. Try again later.</div>) : 
                (displayPosts())
            }
        </Fragment>
    )
}

export default BlogPostPreviews;