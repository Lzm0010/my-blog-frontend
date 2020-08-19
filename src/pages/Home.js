import React, {Fragment} from 'react';
import Nav from '../components/nav/Nav';
import Timeline from '../components/timeline/Timeline';


function Home () {
    return(
        <Fragment>
            <Nav/>
            <Timeline />
        </Fragment>
    )
}

export default Home;