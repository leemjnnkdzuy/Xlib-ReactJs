import classNames from 'classnames/bind';
import styles from './ResetPassword.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ResetPassword() {
    return (
        <section>
            <div className={cx('form-box')}>
                <div className={cx('form-value')}>
                    <div>
                        <h2>Tìm Lại Tài Khoản</h2>
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
                                Bạn Đã Có Tài Khoản ?<Link to={"/Login"}> Đăng Nhập</Link>
                            </p>
                        </div>
                    

                    
                        <div className={cx('register-forget')}>
                            <p>
                                Bạn Chưa Có Tài Khoản ?<Link to={"/Signup"}> Tạo Tài Khoản</Link>
                            </p>
                        </div>
                    
                </div>
            </div>
        </section>
    );
}

export default ResetPassword;
