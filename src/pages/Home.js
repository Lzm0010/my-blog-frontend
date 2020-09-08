import React, {Fragment} from 'react';
import Container from '../components/basic/Container';
import Nav from '../components/nav/Nav';
import Timeline from '../components/timeline/Timeline';
import BlogPostPreviews from '../components/timeline/BlogPostPreviews';


function Home () {
    return(
        <Fragment>
            <Nav/>
            <Container>
                <Timeline>
                    <BlogPostPreviews />
                </Timeline>
            </Container>
        </Fragment>
    )
}

export default Home;