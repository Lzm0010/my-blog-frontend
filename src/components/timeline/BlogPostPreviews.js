import React, {useState, useEffect} from 'react';

function BlogPostPreviews () {
    
    useEffect(() => {
        const baseUrl = `http://localhost:3000`;
        //get posts
        const postsUrl = `${baseUrl}/posts`
        fetch(postsUrl)
            .then(res => res.json())
            .then(posts => {
                console.log(posts)
            })
    }, [])



    return(
        <div>BlogPostPreviews</div>
    )
}

export default BlogPostPreviews;