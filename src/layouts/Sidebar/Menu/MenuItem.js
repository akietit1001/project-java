import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuItem({title, to, icon }) {
    return <NavLink className={(nav)=>cx('menu-item', { active: nav.isActive })} to={to}>
        <div className={cx('menu-icon')}>{icon}</div>
        <span className={cx('title')}>{title}</span>
    </NavLink>
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default MenuItem;