import useAppConfig from '../../hooks/useConfig';

import './Footer.css';

/**
 * Подвал страницы
 * @returns {JSX.Element}
 */
export default function Footer() {
    const config = useAppConfig();

    return (
        <footer className="Footer">
            {` © 
                ${config.COMPANY_NAME}, 
                ${config.COMPANY_CREATE_YEAR}–${new Date().getFullYear()} `}
        </footer>
    );
}
