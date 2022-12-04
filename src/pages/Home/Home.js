import { useState } from 'react';
import Sidebar from '../../layouts/Sidebar/Sidebar';
import {Col, Row, Avatar, Input, Button} from 'antd';
import { HeartOutlined, HeartFilled, CommentOutlined, ShareAltOutlined  } from '@ant-design/icons';
import styled from 'styled-components';

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
    const [isLove, setIsLove] = useState(false);

    const handleButtonLove = () =>{
        setIsLove(!isLove);
    }
    return <div className='wrapper'>
        <Row>
            <SidebarStyles span={4}>  
                <Sidebar />
            </SidebarStyles>
            <ContentStyled span={20}>
                <PostStyles span={10}>
                    <div className='post'>
                        <HeaderPostStyles className='header__post'>
                            <Avatar src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/314907587_692028362283327_5721847997252227209_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=afy53mIdQIUAX9HtVv0&tn=4gSakLtlp4fl4wS6&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCTE0P9JT9copVlIgByEfWyRo0bScvr65bfnI_8WW418A&oe=638C3F27"
                                size={40}
                                className='avatar'
                            />
                            <span className='name-author__post'>Trung Quan</span>
                        </HeaderPostStyles>
                        <img src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/317278659_708591080627055_4573666939096240291_n.jpg?stp=dst-jpg_p843x403&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=3ld7kwdG7tcAX9q4HWC&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfBVcvTa8ND7T05scEnDdzRGShqXWM_tW8-EcUFWhAQ9nw&oe=638DAA07" 
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
                            <Avatar src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/314907587_692028362283327_5721847997252227209_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=afy53mIdQIUAX9HtVv0&tn=4gSakLtlp4fl4wS6&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCTE0P9JT9copVlIgByEfWyRo0bScvr65bfnI_8WW418A&oe=638C3F27"
                                size={40}
                                className='avatar'
                            />
                            <span className='name-author__post'>Trung Quan</span>
                        </HeaderPostStyles>
                        <img src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/317278659_708591080627055_4573666939096240291_n.jpg?stp=dst-jpg_p843x403&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=3ld7kwdG7tcAX9q4HWC&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfBVcvTa8ND7T05scEnDdzRGShqXWM_tW8-EcUFWhAQ9nw&oe=638DAA07" 
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
                            <Avatar src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/314907587_692028362283327_5721847997252227209_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=afy53mIdQIUAX9HtVv0&tn=4gSakLtlp4fl4wS6&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCTE0P9JT9copVlIgByEfWyRo0bScvr65bfnI_8WW418A&oe=638C3F27"
                                size={40}
                                className='avatar'
                            />
                            <span className='name-author__post'>Trung Quan</span>
                        </HeaderPostStyles>
                        <img src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/317278659_708591080627055_4573666939096240291_n.jpg?stp=dst-jpg_p843x403&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=3ld7kwdG7tcAX9q4HWC&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfBVcvTa8ND7T05scEnDdzRGShqXWM_tW8-EcUFWhAQ9nw&oe=638DAA07" 
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