import React, {Fragment} from 'react';
import Nav from '../components/nav/Nav';
import Container from '../components/basic/Container';
import PostForm from '../components/form/PostForm';

function AddPost () {


    return(
        <Fragment>
            <Nav />
            <Container>
                <PostForm />
            </Container>
        </Fragment>
    )
}

export default AddPost;