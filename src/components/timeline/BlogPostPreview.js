import React from 'react';
import ReactMarkdown from 'react-markdown';
import {Link} from '@reach/router';
import styles from './BlogPostPreview.module.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function BlogPostPreview ({post}) {
    const truncate = (string) => {
        return string.substring(0, 200) + "...";
    }

    return(
        <Link to={`post/${post.id}`} state={post}>
            <div>
                <img className={styles.image} src={post.cover_photo_url} alt={post.title}/>
                <div className={styles.title}>{post.title}</div>
                <ReactMarkdown className={styles.content} source={truncate(post.content)}/>
                <hr />
                <div className={styles.footContainer}>
                    <div>{post.likes} <FavoriteBorderIcon /></div>
                    <div>
                        {post.comments.length !== 0 ? post.comments.length : "Write a comment"}
                    </div>
                    <div>{post.views}</div>
                </div>
            </div>
        </Link>
    )
}

export default BlogPostPreview;