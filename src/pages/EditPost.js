import React, {Fragment} from 'react';
import Nav from '../components/nav/Nav';
import Container from '../components/basic/Container';
import PostForm from '../components/form/PostForm';

function EditPost (props) {
    const post = props.location.state;

    return(
        <Fragment>
            <Nav />
            <Container>
                <PostForm post={post}/>
            </Container>
        </Fragment>
    )
}

export default EditPost;