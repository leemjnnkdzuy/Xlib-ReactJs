import Tippy from '@tippyjs/react';
import styles from './Welcome.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Background from '~/components/Layout/components/Backgruond';

const cx = classNames.bind(styles);

function Welcome() {
    return (
            <div className={cx('home')}>
                <div className={cx('home-content')}>Welcome To Xlib</div>

                <div className={cx('background')}><Background /></div>

                <div className={cx('home-icon')}>
                    <Link to="https://facebook.com/groups/341376902184945">
                        <i className={cx('bx bxs-group')}></i>
                    </Link>

                    <Link to="https://facebook.com/leemjnnkdzuy">
                        <i className={cx('bx bxl-facebook-circle')}></i>
                    </Link>

                    <Link to="https://discord.gg/cKpdGnGJ">
                        <i className={cx('bx bxl-discord-alt')}></i>
                    </Link>

                    <Link to="https://github.com/leemjnnkdzuy/Xlib-ReactJs">
                        <i className={cx('bx bxl-github')}></i>
                    </Link>

                    <Link to="/About">
                        <i className={cx('bx bxs-info-circle')}></i>
                    </Link>
                </div>
            </div>
    );
}

export default Welcome;
