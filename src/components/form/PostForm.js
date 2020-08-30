import React, {useState} from 'react';
import Editor from '../editor/Editor';

function PostForm () {
    const [title, setTitle] = useState("");
    const [coverPhotoUrl, setCoverPhotoUrl] = useState("");
    const [content, setContent] = useState("");

    const handleChange = (event) => {
        
    }

    return (
        <form>
            <input type="text" name="title" value={title} onChange={e => handleChange(e)} />
            <input type="text" name="coverPhoto" value={coverPhotoUrl} onChange={e => handleChange(e)} />
            <Editor content={content}/>
            <button type="submit">
                Publish
            </button>
        </form>
    )
};

export default PostForm;