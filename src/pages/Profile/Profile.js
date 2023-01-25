import { useState } from 'react';
import Sidebar from '../../layouts/Sidebar/Sidebar';
import { Row, Col, Avatar, Button, Image} from 'antd';
import { SettingFilled } from '@ant-design/icons'
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const SidebarStyles = styled(Col)`
    height: 100vh;
`
const ContentStyles = styled.div`
    padding: 30px 20px 0;
    width: 100%;
    border-bottom: 1px solid #ccc;
`

const HeaderProfileStyles = styled(Row)`
    margin: 0 auto 30px;
`

const AvatarStyles = styled(Col)`
    display: flex;
    align-items: center;
    justify-content: center;
`

const InfoStyles = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;

    .account-name{
        font-size: 28px;
        font-weight: 300;
    }

    .info-row-1{
        display: flex;
        flex-direction: row;
        align-items: center;
        .btn-setting-profile{
            font-size: 24px;
            cursor: pointer;
            &:hover{
                opacity: 0.8;
            }
        }
    }
    .info-row-2{
        display: flex;
        font-size: 16px;
        flex-direction: row;
        align-items: center;

        .profile-followed{
            margin: 0 30px;
        }
    }

    .full-name{
        font-size: 16px;
        font-weight: 600;
    }
`

function Profile() {
    const [visible, setVisible] = useState(false);
    const user = useSelector(state=>state.users)
    const {lastname, firstname, username} = user;
    const fullname = lastname + ' ' + firstname;
    return <div className='wrapper'>
        <Row>
            <SidebarStyles span={4}>  
                <Sidebar />
            </SidebarStyles>
            <Col span={20}>
                <ContentStyles>
                    <HeaderProfileStyles>
                        <AvatarStyles span={9}>
                            <Avatar src='https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-1/277737199_3028472824071404_6969798517400741706_n.jpg?stp=dst-jpg_p240x240&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=aQZbNSv-RscAX-6WLHQ&tn=4gSakLtlp4fl4wS6&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfAK1mSq5CElO4UEnvcK6EzOP1xewG-WEvCX5cGyx-nPiw&oe=6391C824'
                                size={170}
                            />
                        </AvatarStyles>
                        <InfoStyles span={15}>
                            <div className='info-row-1'>
                                <span className='account-name'>{username}</span>
                                <Button style={{width: '170px', margin: '0 20px'}}>Edit Profile</Button>
                                <span className='btn-setting-profile'>
                                    <SettingFilled/>
                                </span>
                            </div>
                            <div className='info-row-2'>
                                <span className='profile-post'>10 posts</span>
                                <span className='profile-followed'>48 followers</span>
                                <span className='profile-following'>Following 48 users</span>
                            </div>
                            <div className='full-name'>
                                {fullname}
                            </div>
                        </InfoStyles>
                    </HeaderProfileStyles>

                </ContentStyles>
                <div>
                    <Image.PreviewGroup preview={{
                        visible,
                        onVisibleChange: (vis) => setVisible(vis),
                    }}>
                        <Image 
                            width={293} 
                            src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/325136762_3466186717034440_8499047898026989707_n.jpg?stp=dst-jpg_p843x403&_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZUMJJq11y7IAX80Q0tq&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfCHTTP7Mt0AL9FBjmG_OxHFyjO7eph2k1Pdq6B9wFOAhA&oe=63D49C76" 
                        />
                    </Image.PreviewGroup>
                </div>
                    
                
                    
                
            </Col>
        </Row>
    </div>
}

export default Profile;