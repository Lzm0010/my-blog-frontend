import React, {Fragment} from 'react';
import TimeItem from './TimeItem';
import BlogPostPreview from './BlogPostPreview';
import useFetch from '../../hooks/useFetch';

function BlogPostPreviews () {
    const baseUrl = `http://localhost:3000`;
    const postsUrl = `${baseUrl}/posts`;

    const [response, loading, hasError] = useFetch(postsUrl);

    const displayPosts = () => {
    return response.map(post => <TimeItem key={post.id} date={post.created_at}><BlogPostPreview post={post} /></TimeItem>)
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