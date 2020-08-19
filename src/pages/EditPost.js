import React, {Fragment} from 'react';
import Nav from '../components/nav/Nav';
import Editor from '../components/editor/Editor';

function EditPost () {
    return(
        <Fragment>
            <Nav />
            <Editor />
        </Fragment>
    )
}

export default EditPost;