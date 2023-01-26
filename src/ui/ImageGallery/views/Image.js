import './Image.css';

/**
 * Изображение галереи
 *
 * @param title - название изображения
 * @param image - изображение
 * @param className - css класс родителя
 * @param styles - стили
 * @returns {JSX.Element}
 */
export default function Image({ title, image, className = '', styles = {} }) {
    return (
        <div className={`Image ${className}`} >
            <img
                className='Image__object'
                src={image}
                alt={title}
                style={styles}
            />
        </div>
    );
}
