import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import 'boxicons/css/boxicons.css';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('inner')}>
                <a href="index.html" className={cx('logo')}>
                    Xlib
                    <span className={cx('tagline')}>Code By LeeMjnnkDzuy</span>
                </a>
            </div>
        </header>
    );
}

export default Header;
