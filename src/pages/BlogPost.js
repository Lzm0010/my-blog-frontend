import React, {Fragment, useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import Nav from '../components/nav/Nav';
import Container from '../components/basic/Container';
import BlogPostOptions from '../components/blogPost/BlogPostOptions';
import CommentsContainer from '../components/comment/CommentsContainer';
import CodeBlock from '../components/blogPost/CodeBlock';
import styles from './BlogPost.module.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';

function BlogPost (props) {
    const post = props.location.state.post;
    const posts = props.location.state.posts;
    const baseUrl = `http://localhost:3000`;
    const [likes, setLikes] = useState(post.likes);

    // increase views when someone visits page no caps
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
            .then(res => console.log("Post Viewed."));
    }, [post])

    // increase like back end
    const editPostFave = (likes) => {
        const editPostUrl = `${baseUrl}/posts/${post.id}`;
        const patchObj = {
            "method": "PATCH",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            "body": JSON.stringify({likes})
        }
        fetch(editPostUrl, patchObj)
            .then(res => res.json())
            .then(res => console.log("Like added."));
    }

    // increase like front end
    const handleFave = () => {
        const newLikes = likes + 1;
        setLikes(newLikes);
        editPostFave(newLikes);
    }

    return(
        <Fragment>
            <Nav />
            <Container>
                <div className={styles.postContainer}>
                    <h1 className={styles.title}>{post.title}</h1>
                    <ReactMarkdown className={styles.content} source={post.content} renderers={{code: CodeBlock}}/>
                    <hr/>
                    <div className={styles.footContainer}>
                        <div><VisibilityIcon className={styles.eye} style={{fontSize: 12}}/> {post.views}</div>
                        <div><ChatBubbleOutlineIcon style={{fontSize:13}}/> {post.comments.length}</div>
                        <div onClick={handleFave}>{likes} <FavoriteIcon className={styles.heart} style={{fontSize:13}}/></div>
                    </div>
                    <BlogPostOptions post={post} posts={posts}/>
                    <CommentsContainer />
                </div>
            </Container>
        </Fragment>
    )
}

export default BlogPost;