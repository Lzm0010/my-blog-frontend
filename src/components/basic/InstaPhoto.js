import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import styles from './InstaPhoto.module.css';

function InstaPhoto (props) {
    
    return(
        <div className={styles.photo}>
            <InstagramEmbed
                url={props.url}
                maxWidth={320}
                hideCaption={true}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
                />
        </div>
    )
}

export default InstaPhoto;