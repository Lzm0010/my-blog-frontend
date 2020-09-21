import React, {useState} from 'react';
import {useNavigate} from '@reach/router';
import Editor from '../editor/Editor';
import styles from './PostForm.module.css';

function PostForm ({post}) {
    const navigate = useNavigate();
    const [title, setTitle] = useState(post ? post.title : "");
    const [coverPhotoUrl, setCoverPhotoUrl] = useState(post ? post.coverPhotoUrl : "");
    const [content, setContent] = useState(post ? post.content : "");
    const baseUrl = `http://localhost:3000`;

    const addPost = async () => {
        const addPostUrl = `${baseUrl}/posts`
        const postObj = {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            "body": JSON.stringify({title, cover_photo_url:coverPhotoUrl, content, user_id: 1})
        }
        const postData = await fetch(addPostUrl, postObj);
        const post = await postData.json();

        return post;
    }

    const handleTitle = e => {
        const newTitle = e.target.value;
        setTitle(newTitle)
    }

    const handleCoverPhoto = e => {
        e.preventDefault();
        const { files } = document.querySelector('input[type="file"]')
        const formData = new FormData();
        formData.append('file', files[0]);
        formData.append('upload_preset', 'fcgusaea');
        const options = {
            method: 'POST',
            body: formData,
        };

        // replace cloudname with your Cloudinary cloud_name
        return fetch(`https://api.Cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`, options)
            .then(res => res.json())
            .then(res => setCoverPhotoUrl(res.secure_url))
            .catch(err => console.log(err));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const newPost = await addPost();
        navigate(`/post/${newPost.id}`, {state:newPost})
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}> 
                <label htmlFor="title">
                    Title
                </label>
                <input type="text" name="title" value={title} placeholder="Add Your Title" onChange={e => handleTitle(e)} />

                <label htmlFor="coverPhoto">
                    Cover Photo
                </label>
                <input type="file" name="coverPhoto" />
                <button onClick={handleCoverPhoto}>Upload</button>

                <Editor content={content} setContent={setContent} />
                <button className={styles.btn} type="submit">
                    Publish
                </button>
            </form>
        </div>
    )
};

export default PostForm;