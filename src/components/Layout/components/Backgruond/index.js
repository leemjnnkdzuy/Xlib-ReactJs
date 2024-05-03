import styles from './Backgruond.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CONFIG = {
    radius: 35,
    hue: true,
    lightness: 0.5,
    chroma: 1,
    hueBase: 180,
    hueDestination: 320,
    speed: 2.5,
    distance: 12,
    scale: false,
    alternate: false,
};

const UPDATE = () => {
    document.documentElement.style.setProperty('--radius', CONFIG.radius);
    document.documentElement.style.setProperty('--base', CONFIG.hueBase);
    document.documentElement.style.setProperty('--chroma', CONFIG.chroma);
    document.documentElement.style.setProperty('--lightness', CONFIG.lightness);
    document.documentElement.style.setProperty('--limit', CONFIG.hueDestination);
    document.documentElement.style.setProperty('--speed', CONFIG.speed);
    document.documentElement.style.setProperty('--distance', CONFIG.distance);
    document.documentElement.dataset.hue = CONFIG.hue;
    document.documentElement.dataset.scale = CONFIG.scale;
    document.documentElement.dataset.alternate = CONFIG.alternate;
};

UPDATE();

function Background() {
    return (
        <div className={cx('body')}>
            <div className={cx('rings')} style={{ ['--count']: 20 }}>
                <div className={cx('ring')} style={{ ['--index']: 1 }}></div>
                <div className={cx('ring')} style={{ ['--index']: 2 }}></div>
                <div className={cx('ring')} style={{ ['--index']: 3 }}></div>
                <div className={cx('ring')} style={{ ['--index']: 4 }}></div>
                <div className={cx('ring')} style={{ ['--index']: 5 }}></div>
                <div className={cx('ring')} style={{ ['--index']: 6 }}></div>
                <div className={cx('ring')} style={{ ['--index']: 7 }}></div>
                <div className={cx('ring')} style={{ ['--index']: 8 }}></div>
                <div className={cx('ring')} style={{ ['--index']: 9 }}></div>
                <div className={cx('ring')} style={{ ['--index']: 10 }}></div>
                <div className={cx('ring')} style={{ ['--index']: 11 }}></div>
                <div className={cx('ring')} style={{ ['--index']: 12 }}></div>
                <div className={cx('ring')} style={{ ['--index']: 13 }}></div>
                <div className={cx('ring')} style={{ ['--index']: 14 }}></div>
                <div className={cx('ring')} style={{ ['--index']: 15 }}></div>
                <div className={cx('ring')} style={{ ['--index']: 16 }}></div>
                <div className={cx('ring')} style={{ ['--index']: 17 }}></div>
                <div className={cx('ring')} style={{ ['--index']: 18 }}></div>
                <div className={cx('ring')} style={{ ['--index']: 19 }}></div>
                <div className={cx('ring')} style={{ ['--index']: 20 }}></div>
            </div>
        </div>
    );
}

export default Background;
