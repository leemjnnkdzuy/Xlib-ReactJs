import classNames from 'classnames/bind';
import styles from './Signup.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Signup() {
    return (
        <div className={cx('body')}>
            <div className={cx('form-box')}>
                <div className={cx('form-value')}>
                    <div>
                        <h2>Tạo Tài Khoản</h2>
                        <div className={cx('input-box')}>
                            <i className={cx('bx bx-user')}></i>
                            <input type="TText" required name="#" />
                            <label for="">User</label>
                        </div>
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
                    </div>

                    <button className={cx('button')} type="submit" name="#">
                        Đăng Nhập
                    </button>

                    <div className={cx('register-forget')}>
                        <p>
                            Bạn Đã Có Tài Khoản ?<Link to={'/Login'}> Đăng Nhập</Link>
                        </p>
                    </div>

                    <div className={cx('register-forget')}>
                        <p>
                            Bạn Quên Tài Khoản ?<Link to={'/Resetpassword'}> Tìm Lại Tài Khoản</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
