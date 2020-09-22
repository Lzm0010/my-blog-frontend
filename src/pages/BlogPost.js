import React, {Fragment, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import Nav from '../components/nav/Nav';
import Container from '../components/basic/Container';
import BlogPostOptions from '../components/blogPost/BlogPostOptions';
import CommentsContainer from '../components/comment/CommentsContainer';
import CodeBlock from '../components/blogPost/CodeBlock';
import styles from './BlogPost.module.css';

function BlogPost (props) {
    const post = props.location.state;

    useEffect(() => {
        const baseUrl = `http://localhost:3000`;
        const editPostUrl = `${baseUrl}/posts/${post.id}`;
        const patchObj = {
            "method": "PATCH",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            "body": JSON.stringify({views: (post.views + 1)})
        }
        fetch(editPostUrl, patchObj)
            .then(res => res.json())
            .then(updatedPost => console.log(updatedPost));
    }, [post])

    return(
        <Fragment>
            <Nav />
            <Container>
                <h1>{post.title}</h1>
                <ReactMarkdown className={styles.content} source={post.content} renderers={{code: CodeBlock}}/>
                <div>{post.views}</div>
                <div>{post.likes}</div>
                <BlogPostOptions post={post}/>
                <CommentsContainer />
            </Container>
        </Fragment>
    )
}

export default BlogPost;