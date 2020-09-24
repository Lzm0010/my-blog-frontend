import React from 'react';
import {Link} from '@reach/router';

function BlogPostOptions ({post}) {
    return(
        <div>
            {/* Delete Button and Hide */}
            {/* Hide Edit */}
            <Link to={`/editpost/${post.id}`} state={post}>
                Edit Post
            </Link>
            <div>Prev</div>
            <div>Next</div>
            
        </div>
    )
}

export default BlogPostOptions;