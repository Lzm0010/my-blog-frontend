import React, {Fragment} from 'react';
import InstagramEmbed from 'react-instagram-embed';

function InstaPhoto (props) {
    
    return(
        <Fragment>
            {console.log(props)}
            <InstagramEmbed
                url={props.url}
                maxWidth={320}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
                />
                </Fragment>
    )
}

export default InstaPhoto;