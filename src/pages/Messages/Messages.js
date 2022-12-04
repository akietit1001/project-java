import Sidebar from '../../layouts/Sidebar/Sidebar';
import {Avatar, Col, Input, Row} from 'antd';
import styled from 'styled-components';
import Message from '../../components/Message';
import { SendOutlined } from '@ant-design/icons';

const SidebarStyles = styled(Col)`
    height: 100%;
    width: 100%;
`

const WrapperStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContentStyles = styled.div`
    display: flex;
    border: 1px solid #ccc;
    width: 75vw;
    height: 87vh;
    margin-top: 35px;
`

const ListFriendsSTyles = styled(Col)`
    font-size: 16px;
    border-right: 1px solid #ccc;
    height: 100%;
    overflow: hidden auto;
`

const AccountNameStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ccc;
    width: 100%;
    padding: 20px;
`

const FriendStyles = styled.div`
    display: flex;
    padding: 20px;
    &:hover{
        cursor: pointer;
        background-color: #F5F5F5;
    }
    .inner-friend{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10px;
    }
`

const WrapperMessageStyles = styled.div`
`

const HeaderMessage = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 10px;
    z-index: 1;
    .detail-parter{
        display: flex;
        flex-direction: column;
        margin-left: 10px;

        
        .name-parter-message{
            font-size: 16px;
            font-weight: bold;
        }
    }
`

const InputMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    bottom: 5px;
    width: 100%;
    padding: 10px;
    .input__message{
        font-size: 16px;
        border-radius: 25px;
        padding: 15px;
        margin-right: 10px;
    }
    .send__message{
        font-size: 38px;
        color: #1677ff;
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
    }
`

const TextMessage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    height: calc(100% - 130px);
    overflow: hidden auto;
    width: 100%;
    bottom: 65px;
    padding: 10px;
    .text-filed{
        display: flex;
        width: 100%;
    }
`

function Messages() {
    
    return <div className='wrapper'>
        <Row>
            <SidebarStyles span={4}>  
                <Sidebar />
            </SidebarStyles>
            <Col span={20}>
                <WrapperStyles>
                    <ContentStyles>
                        <ListFriendsSTyles span={9}>
                            <AccountNameStyles className='account-name'>ndakiett.cool</AccountNameStyles>
                            <FriendStyles>
                                <Avatar src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/314759360_1784100378593353_1317706178968335052_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=IRRTZQt96oMAX8VwnQt&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfDikpESQO7HFMKyp4P-U9tRIcOBHerU8433MSeqPF1qiA&oe=638D0482" 
                                    size={70}
                                />
                                <div className = 'inner-friend'>
                                    <span className='name-parter'>Faker</span>
                                    <span className='time-online-ago'>Online 1 hour ago</span>
                                </div>
                            </FriendStyles>
                            <FriendStyles>
                                <Avatar src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/314759360_1784100378593353_1317706178968335052_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=IRRTZQt96oMAX8VwnQt&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfDikpESQO7HFMKyp4P-U9tRIcOBHerU8433MSeqPF1qiA&oe=638D0482" 
                                    size={70}
                                />
                                <div className = 'inner-friend'>
                                    <span className='name-parter'>Faker</span>
                                    <span className='time-online-ago'>Online 1 hour ago</span>
                                </div>
                            </FriendStyles>
                        </ListFriendsSTyles>
                        <Col span={15}>
                            <WrapperMessageStyles>
                                <HeaderMessage className='header__message'>
                                    <Avatar src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/314759360_1784100378593353_1317706178968335052_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=IRRTZQt96oMAX8VwnQt&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfDikpESQO7HFMKyp4P-U9tRIcOBHerU8433MSeqPF1qiA&oe=638D0482" 
                                    size={40}
                                    />
                                    <div className = 'detail-parter'>
                                        <span className='name-parter-message'>Faker</span>
                                        <span className='time-online-ago-message'>Online 1 hour ago</span>
                                    </div>
                                </HeaderMessage>
                                <TextMessage>
                                    <div className='text-filed' style={true ? {justifyContent: 'flex-end'} : {justifyContent: 'flex-start'}}>
                                        <Message text={'Hello'}/>
                                    </div>
                                    <div className='text-filed' style={false ? {justifyContent: 'flex-end'} : {justifyContent: 'flex-start'}}>
                                        <Message text={'Nice to meet you'} />
                                    </div>
                                    <div className='text-filed' style={true ? {justifyContent: 'flex-end'} : {justifyContent: 'flex-start'}}>
                                        <Message text={'Where are you from?'} />
                                    </div>
                                    <div className='text-filed' style={false ? {justifyContent: 'flex-end'} : {justifyContent: 'flex-start'}}>
                                        <Message text={'I\'m from Korea'} />
                                    </div>
                                    <div className='text-filed' style={true ? {justifyContent: 'flex-end'} : {justifyContent: 'flex-start'}}>
                                        <Message text={'Oh!!'} />
                                    </div>
                                </TextMessage>
                                <InputMessage>
                                    <Input placeholder='Enter message...' className='input__message' />
                                    <SendOutlined className='send__message' />
                                </InputMessage>
                            </WrapperMessageStyles>
                        </Col>
                    </ContentStyles>
                </WrapperStyles>
            </Col>
        </Row>
    </div>;
}

export default Messages;