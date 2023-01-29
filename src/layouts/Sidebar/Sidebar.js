import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, {MenuItem} from './Menu';
import { ROUTE } from '../../utils/constants';
import images from './../../assets/index'
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const cx = classNames.bind(styles);

function Sidebar() {
    return <aside className={cx('wrapper')}>
    <img src= {images.logo} alt='logo' className={cx('logo')}/>
    <Menu>
        <MenuItem title={"Home"} to={ROUTE.HOME.URL} icon={<HomeIcon sx={{width: '24px', height: '24px', color: '#333', paddingLeft: '8%'}}/>}/>
        <MenuItem title={"Messages"} to={ROUTE.MESSAGES.URL} icon={<MessageIcon sx={{width: '24px', height: '24px', color: '#333', paddingLeft: '8%'}}/>}/>
        <MenuItem title={"Notifications"} to={ROUTE.NOTIFY.URL}  icon={<NotificationsIcon sx={{width: '24px', height: '24px', color: '#333', paddingLeft: '8%'}}/>}/>
        <MenuItem title={"Create"} to={ROUTE.CREATE.URL}  icon={<AddCircleOutlineIcon sx={{width: '24px', height: '24px', color: '#333', paddingLeft: '8%'}}/>}/>
        <MenuItem title={"Profile"} to={ROUTE.PROFILE.URL}  icon={<AccountCircleIcon sx={{width: '24px', height: '24px', color: '#333', paddingLeft: '8%'}}/>}/>
        <MenuItem title={"Setting"} to={ROUTE.SETTING.URL}  icon={<SettingsIcon sx={{width: '24px', height: '24px', color: '#333', paddingLeft: '8%'}}/>}/>
    </Menu>
</aside>
}

export default Sidebar;