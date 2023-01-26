// import { useSwipeable } from 'react-swipeable';
import Section from './../Section';
import ImageGallery from '../ImageGallery';
import useImagesRepository from './../../data/useImagesRepository';

import './SwipableImageGallery.css';

/**
 * Галерея картинок с горизонтальной прокруткой через свайпы.
 * @returns {JSX.Element}
 */
export default function SwipableImageGallery() {
    const images = useImagesRepository().getGalleryImages();

    return (
        <Section
            className='SwipableImageGallery'
            title='Swipable image gallery'
            containerStyles={{
                overflow: 'hidden',
            }}
        >
            <ImageGallery
                images={images.map(image => ({
                    ...image,
                    styles: {
                        width: 225,
                        height: 345,
                    }
                }))}
            />
        </Section>
    );
}
