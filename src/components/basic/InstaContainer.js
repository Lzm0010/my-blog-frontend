import React, {useState} from 'react';
import InstaPhoto from './InstaPhoto';
import styles from './InstaContainer.module.css';

function InstaContainer () {
    const [photos, setPhotos] = useState([
        {
            id: 'p1',
            url: "https://www.instagram.com/p/B_YuTqaltct/"
        },
        {
            id: 'p2',
            url: "https://www.instagram.com/p/B5l6jXahAJi/"
        }
    ]);

    // {/* <InstagramEmbed
    //     url='https://www.instagram.com/p/B_YuTqaltct/'
    //     maxWidth={320}
    //     hideCaption={false}
    //     containerTagName='div'
    //     protocol=''
    //     injectScript
    //     onLoading={() => {}}
    //     onSuccess={() => {}}
    //     onAfterRender={() => {}}
    //     onFailure={() => {}}
    //     /> */}

    const displayInstaPhotos = () => {
        return photos.map(photo => <InstaPhoto key={photo.id} url={photo.url}/>)
    }

    return(
        <div className={styles.container}>
            {displayInstaPhotos()}
        </div>
    )
}

export default InstaContainer;