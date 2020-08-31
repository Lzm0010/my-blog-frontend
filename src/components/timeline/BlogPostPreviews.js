import React, {Fragment, useState, useEffect} from 'react';

function BlogPostPreviews () {
    const [posts, setPosts] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const baseUrl = `http://localhost:3000`;

        //get posts
        const postsUrl = `${baseUrl}/posts`
        fetch(postsUrl)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
                setLoading(false)
            })
            .catch(err => {
                setHasError(true)
                setLoading(false)
            })
    }, [])

    const displayPosts = () => {
       return posts.map(post => <div>{post.title}</div>)
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