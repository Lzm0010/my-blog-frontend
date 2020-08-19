import React, {Fragment} from 'react';
import Date from './Date';
import BlogPostPreview from './BlogPostPreview';
import ResumeFact from './ResumeFact';
import Project from './Project';

function TimeItem () {
    return(
        <Fragment>
            <Date />
            <BlogPostPreview />
            <ResumeFact />
            <Project />
        </Fragment>
    )
}

export default TimeItem;