import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Tooltip } from 'antd';

const cx = classNames.bind(styles);

function MenuItem({title, to, icon }) {
    return <Tooltip title={title} mouseEnterDelay={0.3} placement='right'>
        <NavLink className={(nav)=>cx('menu-item', { active: nav.isActive })} to={to}>
        <div className={cx('menu-icon')}>{icon}</div>
        <span className={cx('title')}>{title}</span>
    </NavLink>
    </Tooltip>
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default MenuItem;