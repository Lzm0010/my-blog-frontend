import React, {Fragment} from 'react';
import Date from './Date';


function TimeItem (props) {
    return(
        <Fragment>
            <Date />
            {props.children}
        </Fragment>
    )
}

export default TimeItem;