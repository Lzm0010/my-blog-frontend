import React from 'react';
import ReactMarkdown from 'react-markdown';
import {Link} from '@reach/router';
import styles from './BlogPostPreview.module.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function BlogPostPreview ({post}) {
    const truncate = (string) => {
        return string.substring(0, 200) + "...";
    }

    return(
        <Link to={`post/${post.id}`} state={post}>
            <div>
                <img className={styles.image} src={post.cover_photo_url} alt={post.title}/>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>{post.title}</div>
                    <MoreVertIcon style={{fontSize:20}}/>
                </div>
                <ReactMarkdown className={styles.content} source={truncate(post.content)}/>
                <hr />
                <div className={styles.footContainer}>
                    <div><VisibilityIcon style={{fontSize: 15}}/> {post.views}</div>
                    <div>
                        {post.comments.length !== 0 ? ( 
                            <span>
                                <ChatBubbleOutlineIcon style={{fontSize:15}}/> post.comments.length
                            </span> ) : <span className={styles.comments}>Write a comment</span>}
                    </div>
                    <div>{post.likes} <FavoriteBorderIcon style={{fontSize:15}}/></div>
                </div>
            </div>
        </Link>
    )
}

export default BlogPostPreview;