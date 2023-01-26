import './Grid.css';

/**
 * Контейнер сетки.
 * Задает максимальную ширину, внутренние отступы и центрирует
 * @param children - контент в сетке
 * @param styles - стили для контейнера
 * @param className - css класс родителя
 * @returns {JSX.Element}
 */
export default function Grid({ children, styles = {}, className = '' }) {
    return (
        <div
            className={`Grid ${className}`}
            style={styles}
        >
            {children}
        </div>
    );
}
