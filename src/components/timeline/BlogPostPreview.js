import React from 'react';
import ReactMarkdown from 'react-markdown';
import {Link} from '@reach/router';
import styles from './BlogPostPreview.module.css';

function BlogPostPreview ({post}) {
    const truncate = (string) => {
        return string.substring(0, 200) + "...";
    }

    return(
        <Link to={`post/${post.id}`} state={post}>
            <div>
                <img className={styles.image} src={post.cover_photo_url} alt={post.title}/>
                <div>{post.title}</div>
                <div>{post.likes}</div>
                <ReactMarkdown source={truncate(post.content)}/>
            </div>
        </Link>
    )
}

export default BlogPostPreview;