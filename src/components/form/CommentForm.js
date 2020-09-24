import React, {useState} from 'react';
import styles from './CommentForm.module.css';

function CommentForm ({post, setComments}) {
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const baseUrl = `http://localhost:3000`;

    const addComment = async () => {
        const addCommentUrl = `${baseUrl}/comments`
        const postObj = {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            "body": JSON.stringify({author, content, post_id: post.id})
        }
        const commentData = await fetch(addCommentUrl, postObj);
        const comment = await commentData.json();

        return comment;
    }

    const handleAuthor = e => {
        const newAuthor = e.target.value;
        setAuthor(newAuthor)
    }

    const handleContent = e => {
        const newContent = e.target.value;
        setContent(newContent);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const newComment = await addComment();
        setComments(comments => [...comments, newComment])
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}> 
                <label htmlFor="author">
                    Author
                </label>
                <input type="text" name="author" value={author} placeholder="Add Your Name" onChange={e => handleAuthor(e)} />

                <label htmlFor="content">
                    Comment
                </label>
                <textarea name="content" rows="7" cols="60" value={content} placeholder="What do you have to say?" onChange={e => handleContent(e)} />

                <button className={styles.btn} type="submit">
                    Comment
                </button>
            </form>
        </div>
    )
};

export default CommentForm;