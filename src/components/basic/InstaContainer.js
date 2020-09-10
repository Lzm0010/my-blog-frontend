import React, {useState} from 'react';
import InstaPhoto from './InstaPhoto';
import styles from './InstaContainer.module.css';

function InstaContainer () {
    const [photos] = useState([
        {
            id: 'p1',
            url: "https://www.instagram.com/p/B_YuTqaltct/"
        },
        {
            id: 'p2',
            url: 'https://www.instagram.com/p/B1mR4XvhucD/'
        },
        {
            id: 'p3',
            url: 'https://www.instagram.com/p/BzwF22_BCVm/'
        },
        {
            id: 'p4',
            url: 'https://www.instagram.com/p/Bj7n7amn2gm/'
        },
        {
            id: 'p5',
            url: "https://www.instagram.com/p/BjSf_eanm5j/"
        },
        {
            id: 'p6',
            url: 'https://www.instagram.com/p/BasVA1LgGQ2/'
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