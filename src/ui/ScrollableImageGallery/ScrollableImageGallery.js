import Section from './../Section';
import ImageGallery from '../ImageGallery';
import { useElementScroll, useRatioDimensions } from '../../hooks';
import useImagesRepository from './../../data/useImagesRepository';

import './ScrollableImageGallery.css';

const config = {
    minWidth: 400,
    minHeight: 600,
    maxWidth: 600,
    maxHeight: 800,
    ratio: (3.3 / 5),
    countOfImagesInView: 4.5,
    paddingBetweenImages: 20,
    diff: 260,
};

/**
 * Галерея картинок с горизонтальной прокруткой через скролл.
 * @returns {JSX.Element}
 */
export default function ScrollableImageGallery() {
    const images = useImagesRepository().getGalleryImages();
    const { width, height } = useRatioDimensions(config);
    const containerHeight =
        width * (images.length)
        + (config.paddingBetweenImages * images.length);
    const { offset, elementRef } = useElementScroll();

    return (
        <Section
            ref={elementRef}
            className='ScrollableImageGallery'
            title='Scrollable image gallery'
            styles={{
                height: containerHeight,
            }}
            containerStyles={{
                position: 'sticky',
                top: 160,
                overflow: 'hidden',
            }}
        >
            <ImageGallery
                images={images.map(image => ({
                    ...image,
                    styles: {
                        width,
                        height,
                    }
                }))}
                styles={{
                    transform: `translate3d(-${offset}px, 0px, 0px)`,
                }}
            />
        </Section>
    );
}
