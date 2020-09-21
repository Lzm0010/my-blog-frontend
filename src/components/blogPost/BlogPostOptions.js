import React from 'react';
import {Link} from '@reach/router';

function BlogPostOptions ({post}) {
    return(
        <div>
            <div>BlogPostOptions</div>
            <Link to={`/editpost/${post.id}`} state={post}>
                Edit Post
            </Link>
        </div>
    )
}

export default BlogPostOptions;