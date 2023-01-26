import images from './media';

/**
 * Репозиторий картинок
 *
 * В реальном приложении НЕ должен использоваться напрямую другими слоями.
 * Вместо этого общение должно происоходить через интерфейсы и, например,
 * механизм внедрения зависимостей(DI).
 * @see [SOLID](https://ru.wikipedia.org/wiki/SOLID_(%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BD%D0%BE-%D0%BE%D1%80%D0%B8%D0%B5%D0%BD%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5))
 */
export default function useImagesRepository() {
    /**
     * Картинки для галереи
     */
    function getGalleryImages() {
        return [
            images.image0,
            images.image1,
            images.image2,
            images.image3,
            images.image4,
            images.image5,
            images.image6,
            images.image7,
            images.image8,
            images.image9,
            images.image10,
        ].map((image, index) => createImage(image, index));
    }

    /**
     * Картинки для блоков на главном экране
     */

    function getMainImages() {
        return [
            images.blockImageVert1,
            images.blockImageVert2,
            images.blockImageHoriz1,
            images.blockImageHoriz2,
        ].map((image, index) => createImage(image, index));
    }

    return {
        getGalleryImages,
        getMainImages,
    }
}

function createImage(image, index) {
    return {
        id: index,
        title: "image" + index,
        image,
    }
}

