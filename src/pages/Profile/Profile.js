import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../../layouts/Sidebar/Sidebar';
import { Row, Col} from 'antd';
import styled from 'styled-components';

const SidebarStyles = styled(Col)`
    height: 100vh;
`

const cx = classNames.bind(styles);

function Profile() {
    return <div className={cx('wrapper')}>
        <Row>
            <SidebarStyles span={4}>  
                <Sidebar />
            </SidebarStyles>
            <Col span={20}>
                <div className={cx('inner')}></div>
            </Col>
        </Row>
    </div>
}

export default Profile;