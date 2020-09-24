import React from 'react';
import styles from './Comment.module.css';
import moment from 'moment';

function Comment ({comment}) {
    return(
        <div className={styles.comment}>
            <div className={styles.header}>
                <div className={styles.author}>{comment.author}</div>
                <div className={styles.date}>{moment(comment.created_at).format("MMM Do 'YY")}</div>
            </div>
            <div className={styles.content}>{comment.content}</div>
        </div>
    )
}

export default Comment;