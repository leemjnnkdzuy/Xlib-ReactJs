import classNames from 'classnames/bind';
import styles from './PageTools.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function PageTools() {
    return (
        <section>
            <div className={cx("row")}>
                <a href="HexToText/HexToText.html">
                    <div className={cx("box")}>Hex To Text</div>
                </a>
                <a href="DownloadVideo/DownloadVideo.html">
                    <div className={cx("box")}>Download Video</div>
                </a>
                <a href="HexToText/HexToText.html">
                    <div className={cx("box")}>Hex To Text</div>
                </a>
            </div>
        </section>
    );
}

export default PageTools;
