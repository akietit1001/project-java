import { useState } from 'react';
import Sidebar from '../../layouts/Sidebar/Sidebar';
import {Col, Row, Avatar, Input, Button} from 'antd';
import { HeartOutlined, HeartFilled, CommentOutlined, ShareAltOutlined  } from '@ant-design/icons';
import styled from 'styled-components';
import { useUser } from '../../hooks/useUser';
import store from '../../redux/store';
import { useSelector } from 'react-redux';

const SidebarStyles = styled(Col)`
    height: 100vh;
    width: 100%;
`

const ContentStyled = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 44px;
`

const PostStyles = styled(Col)`
    display: flex;
    flex: 1;
    max-width: 100%;
    justify-content: center;
    margin-bottom: 30px;

    .post{
        border: 1px solid #ccc;
        border-radius: 12px;
        height: max-content;
    }
`

const HeaderPostStyles = styled.div`

    .name-author__post{
        font-size: 15px;
        font-weight: bold;
        &:hover {
            cursor: pointer;
        }
    }

    .avatar{
        margin: 10px;
        &:hover {
            cursor: pointer;
            opacity: 0.8;
        }
    }
`

const ActionPostStyles = styled.div`
    .anticon{
        font-size: 30px;
        margin: 12px;
        cursor: pointer;
        &:hover{
            opacity: 0.7;
        }
    }
`

const ActionCommentStyles = styled.div`
    display: flex;
    .input__comment{
        font-size: 16px;
        border-radius: 0 0 0 12px;
    }
    .btn__comment{
        font-size: 16px;
        height: 45px;
        border-radius: 0 0 12px 0;
    }
`

function Home() {
    const userStore = useSelector(state=>state.users)
    const {lastname, firstname} = userStore || {}
    const fullname = lastname + " " + firstname;
    const [isLove, setIsLove] = useState(false);
    const handleButtonLove = () =>{
        setIsLove(!isLove);
    }
    // const user = JSON.parse(localStorage.getItem('user'));
    return <div className='wrapper'>
        <Row>
            <SidebarStyles span={4}>  
                <Sidebar />
            </SidebarStyles>
            <ContentStyled span={20}>
                <PostStyles span={10}>
                    <div className='post'>
                        <HeaderPostStyles className='header__post'>
                            <Avatar src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg"
                                size={40}
                                className='avatar'
                            />
                            <span className='name-author__post'>{fullname}</span>
                        </HeaderPostStyles>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" 
                        alt="" style={{width: '600px'}} className='image__post'/>
                        <ActionPostStyles className='actions__post'>
                            <span onClick={handleButtonLove}>{isLove ? <HeartFilled style={{color: '#e41e3f'}}/> : <HeartOutlined />}</span>
                                <span>
                                    <CommentOutlined sizes='large' />
                                </span>
                                <span>
                                    <ShareAltOutlined />
                                </span>
                            
                        </ActionPostStyles>
                        <ActionCommentStyles>
                            <Input placeholder='Add comments' className='input__comment' />
                            <Button className='btn__comment' type='primary' >Post</Button>
                        </ActionCommentStyles>
                    </div>
                </PostStyles>
                <PostStyles span={10}>
                    <div className='post'>
                        <HeaderPostStyles className='header__post'>
                            <Avatar src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg"
                                size={40}
                                className='avatar'
                            />
                            <span className='name-author__post'>Severus</span>
                        </HeaderPostStyles>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" 
                        alt="" style={{width: '600px'}} className='image__post'/>
                        <ActionPostStyles className='actions__post'>
                            <span className='btn-love' onClick={handleButtonLove}>{isLove ? <HeartFilled style={{color: '#e41e3f'}}/> : <HeartOutlined />}</span>
                                <span className='btn-comment'>
                                    <CommentOutlined sizes='large' />
                                </span>
                                <span className='btn-share'>
                                    <ShareAltOutlined />
                                </span>
                            
                        </ActionPostStyles>
                        <ActionCommentStyles>
                            <Input placeholder='Add comments' className='input__comment' />
                            <Button className='btn__comment' type='primary' >Post</Button>
                        </ActionCommentStyles>
                    </div>
                </PostStyles>
                <PostStyles span={10}>
                    <div className='post'>
                        <HeaderPostStyles className='header__post'>
                            <Avatar src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg"
                                size={40}
                                className='avatar'
                            />
                            <span className='name-author__post'>Severus</span>
                        </HeaderPostStyles>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" 
                        alt="" style={{width: '600px'}} className='image__post'/>
                        <ActionPostStyles className='actions__post'>
                            <span className='btn-love' onClick={handleButtonLove}>{isLove ? <HeartFilled style={{color: '#e41e3f'}}/> : <HeartOutlined />}</span>
                                <span className='btn-comment'>
                                    <CommentOutlined sizes='large' />
                                </span>
                                <span className='btn-share'>
                                    <ShareAltOutlined />
                                </span>
                            
                        </ActionPostStyles>
                        <ActionCommentStyles>
                            <Input placeholder='Add comments' className='input__comment' />
                            <Button className='btn__comment' type='primary' >Post</Button>
                        </ActionCommentStyles>
                    </div>
                </PostStyles>
            </ContentStyled>
        </Row>

    </div>;
}

export default Home;