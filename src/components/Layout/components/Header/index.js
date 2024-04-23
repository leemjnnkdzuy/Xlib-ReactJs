import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'boxicons/css/boxicons.css';

import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Item from '../Itemtools';

const cx = classNames.bind(styles);

function Header() {
    const [showToolList, setShowToolList] = useState([]);

    useEffect(() => {
        setShowToolList([]);
    }, []);

    return (
        <header className={cx('header')}>
            <div className={cx('inner')}>
                <button className={cx('logo')}>
                    Xlib
                    <span className={cx('tagline')}>Code By LeeMjnnkDzuy</span>
                </button>
            </div>

            <div className={cx('menu')}>
                <Tippy
                    visible={showToolList.length > 0}
                    interactive={true}
                    render={(attrs) => (
                        <div className={cx('toollist')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h1 className={cx('toollist-title')}>
                                    Công cụ
                                </h1>
                                <Item />
                                <Item />
                                <Item />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <Tippy content="Công cụ">
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                viewBox="0 0 24 24"
                                style={{ fill: '#ffffff' }}
                            >
                                <path d="m3.553 18.895 4 2a1.001 1.001 0 0 0 .894 0L12 19.118l3.553 1.776a.99.99 0 0 0 .894.001l4-2c.339-.17.553-.516.553-.895v-5c0-.379-.214-.725-.553-.895L17 10.382V6c0-.379-.214-.725-.553-.895l-4-2a1 1 0 0 0-.895 0l-4 2C7.214 5.275 7 5.621 7 6v4.382l-3.447 1.724A.998.998 0 0 0 3 13v5c0 .379.214.725.553.895zM8 12.118l2.264 1.132-2.913 1.457-2.264-1.132L8 12.118zm4-2.5 3-1.5v2.264l-3 1.5V9.618zm6.264 3.632-2.882 1.441-2.264-1.132L16 12.118l2.264 1.132zM8 18.882l-.062-.031V16.65L11 15.118v2.264l-3 1.5zm8 0v-2.264l3-1.5v2.264l-3 1.5zM12 5.118l2.264 1.132-2.882 1.441-2.264-1.132L12 5.118z"></path>
                            </svg>
                        </button>
                    </Tippy>
                </Tippy>

                <Tippy content="Tài khoản">
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="60"
                            viewBox="0 0 24 24"
                            style={{ fill: '#ffffff' }}
                        >
                            <path d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"></path>
                            <path d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"></path>
                        </svg>
                    </button>
                </Tippy>
            </div>
        </header>
    );
}

export default Header;
