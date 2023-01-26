import { forwardRef } from 'react';
import Grid from '../Grid/Grid';
import { ColorEnum } from '../../enum/ColorEnum';

import './Section.css';

/**
 * Секция страницы
 * Семантически самостоятельная сущность на странице. Поставляется с отступами сетки
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<{readonly color?: *, readonly children?: *, readonly initial?: *, readonly className?: *, readonly styles?: *, readonly containerStyles?: *, readonly title?: *}> & React.RefAttributes<unknown>>}
 */
const Section = forwardRef(({
    children,
    title = null,
    className = '',
    color = ColorEnum.WHITE,
    styles = {},
    containerStyles = {},
    initial = false,
}, ref) => (
    <section
        ref={ref}
        className={`Section Section_${color} ${className} ${initial ? 'Section_initial' : ''}`}
        style={styles}
    >
        <Grid styles={containerStyles}>
            {isValidTitle(title) && (
                <h1 className='Section__title'>
                    {title}
                </h1>
            )}
            {children}
        </Grid>
    </section>
));

export default Section;

function isValidTitle(title) {
    return title !== null && typeof title !== 'undefined';
}
