import React, {Fragment} from 'react';
import Nav from '../components/nav/Nav';
import Editor from '../components/editor/Editor';

function AddPost () {
    return(
        <Fragment>
            <Nav />
            <Editor />
        </Fragment>
    )
}

export default AddPost;