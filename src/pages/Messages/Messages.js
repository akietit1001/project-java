import Sidebar from '../../layouts/Sidebar/Sidebar';
import {Avatar, Col, Input, Row} from 'antd';
import styled from 'styled-components';

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
    margin-top: 4px;
    padding: 20px;
    &:hover{
        cursor: pointer;
        background-color: #5F5F5F;
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
    padding: 11px;

    .detail-parter{
        display: flex;
        flex-direction: column;
        margin-left: 10px;
    }
`

const InputMessage = styled.div`
    position: absolute;
    bottom: 5px;
    width: 100%;
    padding: 10px;
    .input__message{
        font-size: 16px;
        border-radius: 25px;
        padding: 15px;
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
                                <InputMessage>
                                    <Input placeholder='Message...' className='input__message' />
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