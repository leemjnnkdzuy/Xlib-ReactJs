import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </aside>
    );
    
};

export default Sidebar;