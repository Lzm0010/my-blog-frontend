import React, {useState} from 'react';
import Editor from '../editor/Editor';

function PostForm () {
    const [title, setTitle] = useState("");
    const [coverPhotoUrl, setCoverPhotoUrl] = useState("");
    const [content, setContent] = useState("");
    const baseUrl = `http://localhost:3000`;

    const addPost = () => {
        const addPostUrl = `${baseUrl}/posts`
        const postObj = {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            "body": JSON.stringify({title, cover_photo_url:coverPhotoUrl, content, user_id: 1})
        }
        fetch(addPostUrl, postObj)
            .then(res => res.json())
            .then(post => console.log(post))
    }

    const handleTitle = (e) => {
        const newTitle = e.target.value;
        setTitle(newTitle)
    }

    const handleCoverPhoto = (e) => {
        const newCoverPhoto = e.target.value;
        setCoverPhotoUrl(newCoverPhoto);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost();
    }

    return (
        <form onSubmit={handleSubmit}> 
            <input type="text" name="title" value={title} placeholder="Add Your Title" onChange={e => handleTitle(e)} />
            <input type="text" name="coverPhoto" value={coverPhotoUrl} placeholder="Add Cover Photo Url" onChange={e => handleCoverPhoto(e)} />
            <Editor content={content} setContent={setContent} />
            <button type="submit">
                Publish
            </button>
        </form>
    )
};

export default PostForm;