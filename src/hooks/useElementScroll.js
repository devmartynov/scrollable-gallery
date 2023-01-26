import { useCallback, useEffect, useRef, useState } from 'react';
import HorizontalScrollingStatusEnum from '../enum/HorizontalScrollingStatusEnum';
import VerticalScrollingStatusEnum from '../enum/VerticalScrollingStatusEnum';

/**
 * Обработчик скролла.
 * Слушает скролл на окне. Выставляет статус вертикальной и горизонтальной
 * прокрутки.
 * Вертикальная прокрутка - скролл окна
 * Горизонтальная прокрутка - это тоже скролл окна, но который отсчитывается
 * по элементу с position: sticky.
 *
 * @return offset оффсет для горизонтальной прокрутки галереи с картинками.
 * ref - рефа элемента с position: sticky
 */
export default function useElementScroll() {
    const verticalScrollingStatus = useRef(VerticalScrollingStatusEnum.IDLE);
    const horizontalScrollingStatus = useRef(HorizontalScrollingStatusEnum.IDLE);
    const elementRef = useRef(null);
    const [offset, setOffset] = useState(0);
    const [actualOffset, setActualOffset] = useState(offset);
    const prevOffset = useRef(offset);

    const handleScroll = useCallback(() => {
        const element = elementRef.current;
        const rect = element.getBoundingClientRect();
        const toBottom = prevOffset.current > rect.y;
        const gridElement = element.childNodes[0];
        const isOutOfContainer = ((160 * 2 + gridElement.clientHeight) + Math.abs(offset) >= element.clientHeight)
            || (offset < 0);
        prevOffset.current = rect.y
        const isInContainer = offset >= 0 && !isOutOfContainer;

        // выставляем статус вертикального скролла
        if (toBottom && isInContainer) {
            verticalScrollingStatus.current = VerticalScrollingStatusEnum.SCROLLING_INNER_TO_BOTTOM;
        } else if (toBottom && !isInContainer) {
            verticalScrollingStatus.current = VerticalScrollingStatusEnum.SCROLLING_OUT_TO_BOTTOM;
        } else if (!toBottom && isInContainer) {
            verticalScrollingStatus.current = VerticalScrollingStatusEnum.SCROLLING_INNER_TO_TOP;
        } else if (!toBottom && !isInContainer) {
            verticalScrollingStatus.current = VerticalScrollingStatusEnum.SCROLLING_OUT_TO_TOP;
        }

        const verticalStatus = verticalScrollingStatus.current;
        const horizontalStatus = horizontalScrollingStatus.current;

        // если скроллим выше контэйнера
        if (verticalStatus === VerticalScrollingStatusEnum.SCROLLING_OUT_TO_TOP) {
            // то выставляем один раз офсет 0
            if (horizontalStatus !== HorizontalScrollingStatusEnum.IDLE) {
                horizontalScrollingStatus.current = HorizontalScrollingStatusEnum.IDLE;
                setActualOffset(0);
            }
        } else if ([
            VerticalScrollingStatusEnum.SCROLLING_INNER_TO_TOP,
            VerticalScrollingStatusEnum.SCROLLING_INNER_TO_BOTTOM
        ].includes(verticalStatus)) { // если скроллим в контейнера
            // то выставляем оффсет до того как будет пройдена точка остановки прокрутки
            horizontalScrollingStatus.current = HorizontalScrollingStatusEnum.SCROLLING;
            setActualOffset(-(rect.y));
        } else { // если скроллим ниже контейнера
            // то выставляем один раз офсет, с которого начнется обратный скролл
            horizontalScrollingStatus.current = HorizontalScrollingStatusEnum.IDLE;
        }

        setOffset(-(rect.y));
    }, [offset]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [handleScroll]);

    return {
        elementRef,
        offset: actualOffset,
    };
}
