import React, {Fragment} from 'react';
import Nav from '../components/nav/Nav';
import BlogPostOptions from '../components/blogPost/BlogPostOptions';
import CommentsContainer from '../components/comment/CommentsContainer';

function BlogPost (props) {
    const post = props.location.state;
    console.log(post)

    return(
        <Fragment>
            <Nav />
            <h1>{post.title}</h1>
            <div>{post.cover_photo_url}</div>
            <div>{post.views}</div>
            <div>{post.likes}</div>
            <p>{post.content}</p>


            <BlogPostOptions />
            <CommentsContainer />
        </Fragment>
    )
}

export default BlogPost;