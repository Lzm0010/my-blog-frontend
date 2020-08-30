import React, {Fragment} from 'react';
import Nav from '../components/nav/Nav';
import PostForm from '../components/form/PostForm';

function EditPost () {
    return(
        <Fragment>
            <Nav />
            <PostForm />
        </Fragment>
    )
}

export default EditPost;