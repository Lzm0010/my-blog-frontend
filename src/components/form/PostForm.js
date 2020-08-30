import React, {useState} from 'react';
import Editor from '../editor/Editor';

function PostForm () {
    const [title, setTitle] = useState("");
    const [coverPhotoUrl, setCoverPhotoUrl] = useState("");
    const [content, setContent] = useState("");

    const handleTitle = (e) => {
        const newTitle = e.target.value;
        setTitle(newTitle)
    }

    const handleCoverPhoto = (e) => {
        const newCoverPhoto = e.target.value;
        setCoverPhotoUrl(newCoverPhoto);
    }

    return (
        <form>
            <input type="text" name="title" value={title} placeholder="Add Your Title" onChange={e => handleTitle(e)} />
            <input type="text" name="coverPhoto" value={coverPhotoUrl} placeholder="Add Cover Photo Url" onChange={e => handleCoverPhoto(e)} />
            <Editor content={content}/>
            <button type="submit">
                Publish
            </button>
        </form>
    )
};

export default PostForm;