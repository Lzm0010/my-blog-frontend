import React from 'react';
import {Link} from '@reach/router';
import styles from './BlogPostOptions.module.css';

function BlogPostOptions ({post, posts}) {
    const prevPostId = post.id - 1;
    const prevPost = posts.find(post => post.id === prevPostId);
    const nextPostId = post.id + 1;
    const nextPost = posts.find(post => post.id === nextPostId);

    return(
        <div className={styles.btnContainer}>
            {/* Delete Button and Edit Hide */}
            {/* <Link to={`/editpost/${post.id}`} state={post}>
                Edit Post
            </Link> */}
            {prevPost !== undefined ?
                <Link className={styles.btn} to={`/post/${prevPostId}`} state={{post:prevPost, posts}}>&laquo; Previous</Link> :
                null
            }
            {nextPost !== undefined ?
                <Link className={styles.btn} to={`/post/${nextPostId}`} state={{post:nextPost, posts}}>Next &raquo;</Link> :
                null
            }
            
        </div>
    )
}

export default BlogPostOptions;