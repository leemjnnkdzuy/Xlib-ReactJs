import classNames from 'classnames/bind';
import styles from './ResetPassword.module.scss';

const cx = classNames.bind(styles);

function ResetPassword() {
    return (
        <section>
            <div className={cx('form-box')}>
                <div className={cx('form-value')}>
                    <div>
                        <h2>Tạo Tài Khoản</h2>
                        <div className={cx('input-box')}>
                            <i className={cx('bx bx-envelope')}></i>
                            <input type="email" required name="#" />
                            <label for="">Email</label>
                        </div>
                    </div>

                    <button className={cx('button')} type="submit" name="#">
                        Đăng Nhập
                    </button>

                    <div className={cx('register-forget')}>
                        <p>
                            Bạn Đã Có Tài Khoản ?<a href="#"> Đăng Nhập</a>
                        </p>
                    </div>

                    <div className={cx('register-forget')}>
                        <p>
                            Bạn Chưa Có Tài Khoản ?<a href="#"> Tạo Tài Khoản</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ResetPassword;
