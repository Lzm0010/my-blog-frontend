import React, {Fragment} from 'react';
import Nav from '../components/nav/Nav';
import BlogPostOptions from '../components/blogPost/BlogPostOptions';
import CommentsContainer from '../components/comment/CommentsContainer';

function BlogPost () {
    return(
        <Fragment>
            <Nav />
            <p>A Blog Post</p>
            <BlogPostOptions />
            <CommentsContainer />
        </Fragment>
    )
}

export default BlogPost;