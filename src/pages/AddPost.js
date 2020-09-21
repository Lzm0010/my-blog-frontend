import React, {Fragment} from 'react';
import Nav from '../components/nav/Nav';
import Header from '../components/basic/Header';
import Container from '../components/basic/Container';
import PostForm from '../components/form/PostForm';

function AddPost () {


    return(
        <Fragment>
            <Nav />
            <Container>
                <Header title="New Post" />
                <PostForm />
            </Container>
        </Fragment>
    )
}

export default AddPost;