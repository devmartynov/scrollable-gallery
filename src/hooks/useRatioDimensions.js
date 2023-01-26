import { useState, useEffect, useCallback } from 'react';
import { throttle } from '../utils';

/**
 * useRationDimensions
 * Считает размеры для изображений в галереи с учетом соотношения сторон
 * и кол-ва видимых элементов в галереи
 */
export default function useRatioDimensions({
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    ratio,
    countOfImagesInView,
    paddingBetweenImages,
    diff,
}) {
    const [dimensions, setDimensions] = useState({
        width: minWidth,
        height: minHeight,
    });

    const updateSize = useCallback(throttle(() => {
        let width = window.innerWidth * 0.29;
        let height = width / ratio;

        if (width > maxWidth || height > maxHeight) {
            width = maxWidth;
            height = maxHeight;
        }

        if (window.innerWidth < ((width * countOfImagesInView) + (paddingBetweenImages * countOfImagesInView))) {
            width = (window.innerWidth - diff - (paddingBetweenImages * countOfImagesInView)) / countOfImagesInView
            height = width / ratio;
        }

        setDimensions({
            width,
            height,
        });
    }, 100), []);

    useEffect(() => {
        updateSize();
    }, [updateSize]);

    useEffect(() => {
        window.addEventListener("resize", updateSize);
        return () => {
            window.removeEventListener("resize", updateSize)
        };
    }, [updateSize]);


    return dimensions;
}
