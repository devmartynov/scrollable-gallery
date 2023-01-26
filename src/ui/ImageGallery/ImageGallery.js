import React, { forwardRef } from 'react';
import Image from './views/Image';

import './ImageGallery.css';

/**
 * Галерея картинок.
 * Нет никакой ф-ти, просто отображение элементов горизонтально
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<{}> & React.RefAttributes<unknown>>}
 */
const ImageGallery = forwardRef((props, ref) => (
    <div
        className='ImageGallery'
        ref={ref}
    >
        <div
            className='ImageGallery__inner'
            style={{
                // transform: 'translate3d(-30px, 0px, 0px), scale3d(1,1,1), rotateX(0), rotateY(0), rotateZ(0), skew(0)',
                // transform: `translate3d(-${props.offset}px, 0px, 0px)`,
                ...props.styles,
            }}
        >
            {props.images.map(image => (
                <Image
                    className='ImageGallery__image'
                    key={image.id}
                    title={image.title}
                    image={image.image}
                    styles={image.styles}
                />
            ))}
        </div>
    </div >
));

export default ImageGallery;
