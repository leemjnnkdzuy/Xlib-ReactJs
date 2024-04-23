import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    return (
        <section>
            <div className={cx('form-box')}>
                <div className={cx('form-value')}>
                    <div>
                        <h2>Đăng Nhập</h2>
                        <div className={cx('input-box')}>
                            <i className={cx('bx bx-envelope')}></i>
                            <input type="email" required name="#" />
                            <label for="">Email</label>
                        </div>
                        <div className={cx('input-box')}>
                            <i className={cx('bx bx-lock-alt')}></i>
                            <input type="password" required name="#" />
                            <label for="">Mật Khẩu</label>
                        </div>
                        <div className={cx("remember")}>
                            <label for="">
                                <input type="checkbox" name="#" />
                                Lưu Đăng Nhập
                            </label>
                        </div>
                    </div>

                    <button className={cx('button')} type="submit" name="#">
                        Đăng Nhập
                    </button>

                    <div className={cx('register-forget')}>
                        <p>
                            Bạn Quên Tài Khoản ?<a href="#"> Tìm Lại Tài Khoản</a>
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

export default Login;
