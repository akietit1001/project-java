import React from 'react';
import styled from 'styled-components';

const WrapperStyles = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    width: max-content;
    border-radius: 24px;
    padding: 10px 15px;
    margin: 10px;
`

const Message = ({Imsend, avatar, text}) => {
    return (
        <WrapperStyles>
            <div className='text-message'>{text}</div>
        </WrapperStyles>
    );
}

export default Message;
