import SwipableImageGallery from '../SwipableImageGallery';
import ScrollableImageGallery from '../ScrollableImageGallery';

import './Gallery.css';

export default function Gallery() {
    if (window.innerWidth >= 1920) {
        return (
            <ScrollableImageGallery />
        );
    }

    return (
        <SwipableImageGallery />
    );
}
