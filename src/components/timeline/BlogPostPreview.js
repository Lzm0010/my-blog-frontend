import React from 'react';
import ReactMarkdown from 'react-markdown';
import {Link} from '@reach/router';

function BlogPostPreview ({post}) {
    return(
        <Link to={`post/${post.id}`} state={post}>
            <div>
                <img src={post.cover_photo_url} alt={post.title}/>
                <div>{post.title}</div>
                <div>{post.likes}</div>
                <ReactMarkdown source={post.content}/>
            </div>
        </Link>
    )
}

export default BlogPostPreview;