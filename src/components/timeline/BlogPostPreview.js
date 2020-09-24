import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown';
import {Link} from '@reach/router';
import styles from './BlogPostPreview.module.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

function BlogPostPreview ({post, posts}) {
    const baseUrl = `http://localhost:3000`;
    const [likes, setLikes] = useState(post.likes);

    const truncate = (string) => {
        return string.substring(0, 200) + "...";
    }

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

    const handleFave = () => {
        const newLikes = likes + 1;
        setLikes(newLikes);
        editPostFave(newLikes);
    }

    return(
        <div>
            <Link className={styles.blogLink} to={`post/${post.id}`} state={{post, posts}}>
                <img className={styles.image} src={post.cover_photo_url} alt={post.title}/>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>{post.title}</div>
                    {/* add sharing on different channels later <MoreVertIcon style={{fontSize:20}}/> */}
                </div>
                <ReactMarkdown className={styles.content} source={truncate(post.content)}/>
            </Link>
                <hr />
                <div className={styles.footContainer}>
                    <div><VisibilityIcon className={styles.eye} style={{fontSize: 12}}/> {post.views}</div>
                    <Link className={styles.blogLink} to={`post/${post.id}`} state={{post, posts}}>
                        {post.comments.length !== 0 ? ( 
                            <span>
                                <ChatBubbleOutlineIcon style={{fontSize:13}}/> post.comments.length
                            </span> ) : <span className={styles.comments}>Write a comment</span>}
                    </Link>
                        <div onClick={handleFave}>{likes} <FavoriteIcon className={styles.heart} style={{fontSize:13}}/></div>
                </div>
        </div>
    )
}

export default BlogPostPreview;