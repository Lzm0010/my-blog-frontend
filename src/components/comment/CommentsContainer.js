import React, {Fragment, useState} from 'react';
import Comment from './Comment';
import CommentForm from '../form/CommentForm';

function CommentContainer ({post, comments}) {
    const [blogComments, setBlogComments] = useState(comments);
    
    const displayComments = () => {
        return blogComments.map(comment => <Comment key={`c-${comment.id}`} comment={comment}/>)
    }

    return(
        <Fragment>
            <div>Post a Comment</div>
            <CommentForm post={post} setComments={setBlogComments}/>
            <div>Comments</div>
            { 
                displayComments()
            }
        </Fragment>
    )
}

export default CommentContainer;