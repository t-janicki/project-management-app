import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

function WelcomeCarousel() {

    const photos = [
        {
            id: 1,
            alt: 'img1',
            title: 'Start with creation of a new personal board...or...',
            link: 'assets/images/board/img1.png'
        },
        {
            id: 6,
            alt: 'img2',
            title: 'create a whole team. :)',
            link: 'assets/images/board/img2.png'

        },
        {
            id: 4,
            alt: 'img3',
            title: 'add new board to the team...',
            link: 'assets/images/board/img3.png'
        },
        {
            id: 5,
            alt: 'img3',
            title: 'you can edit team settings or invite more members...',
            link: 'assets/images/board/img4.png'
        },
        {
            id: 3,
            alt: 'img4',
            title: 'create lists...and add some cards...',
            link: 'assets/images/board/img5.png'
        },
        {
            id: 2,
            alt: 'img5',
            title: 'add more details to your card and enjoy. :)',
            link: 'assets/images/board/img6.png'
        },
    ];

    return (
        <React.Fragment>
            <Carousel showStatus={false} autoPlay={true} interval={4000} transitionTime={700}
                      useKeyboardArrows={true} showThumbs={false}>
                {photos.map(photo => (
                    <div>
                        <img alt={photo.alt} src={photo.link}/>
                        <p className="legend">{photo.title}</p>
                    </div>
                ))}
            </Carousel>
        </React.Fragment>
    );
}

export default WelcomeCarousel;
