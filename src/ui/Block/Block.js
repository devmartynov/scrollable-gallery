import './Block.css';

/**
 * Блок.
 * @param title - заголовок секции
 * @param text - текст в секции(можно вставлять строку html)
 * @param image - изображение в блоке
 * @param className - css класс родителя
 * @param reverted - зеркально перевернутый блок?
 * @returns {JSX.Element}
 */
export default function Block({
    title,
    text,
    image,
    className = '',
    reverted = false,
}) {
    return (
        <div className={`Block ${reverted ? 'Block_reverted' : ''} ${className}`}>
            <div className='Block__content'>
                <h2 className='Block__title'>
                    {title}
                </h2>
                <p
                    className='Block__text'
                    dangerouslySetInnerHTML={{ __html: text }} />
            </div>
            <img
                className='Block__image'
                src={image}
                alt={''}
            />
        </div>
    );
}
