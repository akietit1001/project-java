import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, {MenuItem} from './Menu';
import { ROUTE } from '../../utils/constants';
import images from './../../assets/index'

const cx = classNames.bind(styles);

function Sidebar() {
    return <aside className={cx('wrapper')}>
    <img src= {images.logo} alt='logo'/>
    <Menu>
        <MenuItem title={"Home"} to={ROUTE.HOME.URL}/>
        <MenuItem title={"Messages"} to={ROUTE.MESSAGES.URL}/>
        <MenuItem title={"Notifications"} to={ROUTE.NOTIFY.URL} />
        <MenuItem title={"Profile"} to={ROUTE.PROFILE.URL} />
        <MenuItem title={"Setting"} to={ROUTE.SETTING.URL} />
    </Menu>
</aside>
}

export default Sidebar;