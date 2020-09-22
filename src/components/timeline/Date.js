import React from 'react';
import moment from 'moment';

function Date ({date}) {

    const formatDate = (date) => {
        if (moment(date)._f === "YYYY-MM-DDTHH:mm:ss.SSSSZ") {
            return moment(date).format("MMM Do YYYY")
        } 
        return date
    }

    return(
        <div>{formatDate(date)}</div>
    )
}

export default Date;