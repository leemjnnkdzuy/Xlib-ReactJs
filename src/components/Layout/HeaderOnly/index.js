import classNames from 'classnames/bind';
import React, { useState, useEffect } from 'react';


import styles from './HeaderOnly.module.scss';
import Header from '~/components/Layout/components/Header';

const cx = classNames.bind(styles);


function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className={cx("container")}>
                <div className={cx("content")}>{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
