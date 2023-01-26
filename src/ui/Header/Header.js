import { clearPhoneNumber } from '../../utils';
import { useAppConfig } from '../../hooks';
import Grid from '../Grid/Grid';
import images from '../../static';

import './Header.css';

/**
 * Шапка страницы
 * @param className css класс родителя
 * @returns {JSX.Element}
 */
export default function Header({ className = '' }) {
    const config = useAppConfig();

    return (
        <header className={`Header ${className}`}>
            <Grid className='Header__container'>
                <a className='Header__logo' >
                    <img
                        className='Header__image'
                        src={images.logo}
                        alt={config.COMPANY_NAME}
                    />
                </a>
                <a
                    className='Header__contact'
                    href={`tel:${clearPhoneNumber(config.COMPANY_CONTACT_PHONE)}`}
                >
                    {config.COMPANY_CONTACT_PHONE}
                </a>
            </Grid>
        </header>
    );
}
