import React, {Fragment} from 'react';
import Nav from '../components/nav/Nav';
import Container from '../components/basic/Container';
import PostForm from '../components/form/PostForm';

function EditPost () {
    return(
        <Fragment>
            <Nav />
            <Container>
                <PostForm />
            </Container>
        </Fragment>
    )
}

export default EditPost;