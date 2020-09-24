import React from 'react';
import {Link} from '@reach/router';

function BlogPostOptions ({post, posts}) {
    const prevPostId = post.id - 1;
    const prevPost = posts.find(post => post.id === prevPostId);
    const nextPostId = post.id + 1;
    const nextPost = posts.find(post => post.id === nextPostId);

    return(
        <div>
            {/* Delete Button and Edit Hide */}
            {/* <Link to={`/editpost/${post.id}`} state={post}>
                Edit Post
            </Link> */}
            {prevPost !== undefined ?
                <Link to={`/post/${prevPostId}`} state={{post:prevPost, posts}}>Prev</Link> :
                null
            }
            {nextPost !== undefined ?
                <Link to={`/post/${nextPostId}`} state={{post:nextPost, posts}}>Next</Link> :
                null
            }
            
        </div>
    )
}

export default BlogPostOptions;