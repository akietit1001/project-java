import styles from './Sidebar.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

function Sidebar() {
    return <div className={cx('wrapper')}>Hello World</div>
}

export default Sidebar;
