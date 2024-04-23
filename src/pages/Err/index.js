import styles from './Err.module.scss';
import classNames from 'classnames/bind';
import errorImage from '~/assets/err.png';

const cx = classNames.bind(styles);

function Err() {
    return (
        <section>
            <div className={cx('container')}>
                <div className={cx('info')}>
                    <h2>Đen vãi!</h2>
                    <p>Trang này bị lỗi rồi!</p>
                    <button className={cx('button')}>Quay lại trang chủ</button>
                </div>
                <div className={cx('image')}>
                    <img src={errorImage} alt="Hình Ảnh" />
                </div>
            </div>
        </section>
    );
}

export default Err;
