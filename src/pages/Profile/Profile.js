import { useState } from 'react';
import Sidebar from '../../layouts/Sidebar/Sidebar';
import { Row, Col, Avatar, Button, Image} from 'antd';
import { SettingFilled } from '@ant-design/icons'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useUser } from '../../hooks/useUser';

const SidebarStyles = styled(Col)`
    height: 100vh;
`
const ContentStyles = styled.div`
    padding: 30px 20px 0;
    width: 100%;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
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

const ImageStyles = styled.span`
    margin: 15px;
`

function Profile() {
    const [visible, setVisible] = useState(false);
    // const user = useSelector(state=>state.users)
    const user = useUser();
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
                            <Avatar
                                size={170}
                            >{firstname[0]}</Avatar>
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
            <ImageStyles>
                <Image
                preview={{
                    visible: false,
                }}
                    width={293}
                    src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/325136762_3466186717034440_8499047898026989707_n.jpg?stp=dst-jpg_p843x403&_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZUMJJq11y7IAX80Q0tq&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfCHTTP7Mt0AL9FBjmG_OxHFyjO7eph2k1Pdq6B9wFOAhA&oe=63D49C76" 
                    onClick={() => setVisible(true)}
                />
                <div
                    style={{
                    display: 'none',
                }}
                >
                    <Image.PreviewGroup preview={{
                        visible,
                        onVisibleChange: (vis) => setVisible(vis),
                    }}>
                        <Image
                            src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/325136762_3466186717034440_8499047898026989707_n.jpg?stp=dst-jpg_p843x403&_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZUMJJq11y7IAX80Q0tq&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfCHTTP7Mt0AL9FBjmG_OxHFyjO7eph2k1Pdq6B9wFOAhA&oe=63D49C76" 
                        />
                        <Image
                            src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/325136762_3466186717034440_8499047898026989707_n.jpg?stp=dst-jpg_p843x403&_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZUMJJq11y7IAX80Q0tq&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfCHTTP7Mt0AL9FBjmG_OxHFyjO7eph2k1Pdq6B9wFOAhA&oe=63D49C76" 
                        />
                        <Image
                            src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/325136762_3466186717034440_8499047898026989707_n.jpg?stp=dst-jpg_p843x403&_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZUMJJq11y7IAX80Q0tq&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfCHTTP7Mt0AL9FBjmG_OxHFyjO7eph2k1Pdq6B9wFOAhA&oe=63D49C76" 
                        />
                    </Image.PreviewGroup>
                </div>     
            </ImageStyles>
            <ImageStyles>
                <Image
                    width={293}
                    src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/327143839_863202838279190_1120819896134065252_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=8FgT3FszqeIAX-C27Tu&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfCKExTSZyW8zeJq5kj_C6l0ykIHQDYSlaRGspn7Y1fy8Q&oe=63D51D3E"
                    />
            </ImageStyles>
            </Col>
        </Row>
    </div>
}

export default Profile;