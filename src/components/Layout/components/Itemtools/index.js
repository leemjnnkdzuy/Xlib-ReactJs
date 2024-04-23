import classNames from "classnames/bind";
import styles from "./Itemtools.module.scss";

const cx = classNames.bind(styles);

function Item() {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('item')}>
                123
            </h4>
        </div>
    );
}

export default Item;