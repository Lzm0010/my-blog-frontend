import React, {Fragment} from 'react';
import Nav from '../components/nav/Nav';
import Timeline from '../components/timeline/Timeline';
import BlogPostPreviews from '../components/timeline/BlogPostPreviews';

function Home () {
    return(
        <Fragment>
            <Nav/>
            <Timeline>
                <BlogPostPreviews />
            </Timeline>
        </Fragment>
    )
}

export default Home;