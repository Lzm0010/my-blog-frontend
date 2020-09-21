import React, {Fragment} from 'react';
import ReactMarkdown from 'react-markdown';
import Nav from '../components/nav/Nav';
import Container from '../components/basic/Container';
import BlogPostOptions from '../components/blogPost/BlogPostOptions';
import CommentsContainer from '../components/comment/CommentsContainer';
import CodeBlock from '../components/blogPost/CodeBlock';
import styles from './BlogPost.module.css';

function BlogPost (props) {
    const post = props.location.state;

    return(
        <Fragment>
            <Nav />
            <Container>
                <h1>{post.title}</h1>
                <img src={post.cover_photo_url} alt={post.title}/>
                <div>{post.views}</div>
                <div>{post.likes}</div>
                <ReactMarkdown className={styles.content} source={post.content} renderers={{code: CodeBlock}}/>
                <BlogPostOptions post={post}/>
                <CommentsContainer />
            </Container>
        </Fragment>
    )
}

export default BlogPost;