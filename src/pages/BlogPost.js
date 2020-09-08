import React, {Fragment} from 'react';
import ReactMarkdown from 'react-markdown';
import Nav from '../components/nav/Nav';
import Container from '../components/basic/Container';
import BlogPostOptions from '../components/blogPost/BlogPostOptions';
import CommentsContainer from '../components/comment/CommentsContainer';
import CodeBlock from '../components/blogPost/CodeBlock';

function BlogPost (props) {
    const post = props.location.state;
    console.log(post)

    return(
        <Fragment>
            <Nav />
            <Container>
                <h1>{post.title}</h1>
                <div>{post.cover_photo_url}</div>
                <div>{post.views}</div>
                <div>{post.likes}</div>
                <ReactMarkdown source={post.content} renderers={{code: CodeBlock}}/>
                <BlogPostOptions />
                <CommentsContainer />
            </Container>
        </Fragment>
    )
}

export default BlogPost;