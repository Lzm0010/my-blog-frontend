import React from 'react';

function BlogPostPreview ({post}) {
    return(
        <div>
            <div>{post.cover_photo_url}</div>
            <div>{post.title}</div>
            <div>{post.likes}</div>
            <div>{post.content}</div>
        </div>
    )
}

export default BlogPostPreview;