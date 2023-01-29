import { useState } from "react";
import Sidebar from "../../layouts/Sidebar/Sidebar";
import { Col, Row, Input } from "antd";
import styled from 'styled-components';
import { Upload, Button } from 'antd';
import ImgCrop from 'antd-img-crop';
import { Uploader } from 'uploader';
import { UploadButton } from "react-uploader";

const { TextArea } = Input;


const SidebarStyles = styled(Col)`
    height: 100vh;
    width: 100%;
`

const ContentStyled = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 44px;
    .post_form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const BtnPost = styled.button`
    height: 60px;
    padding: 12px;
    background-color: #377dff;
    border-radius: 12px;
    margin: 10px 0;

`

const ImagePost = styled(Upload)`
    &&&&&{
        display: contents;
    }
`

function Create() {
    const [caption, setCaption] = useState('');
    const [files, setFiles] = useState([]);
    // const onChange = ({ fileList: newFileList }) => {
    //     setFileList(newFileList);
    // };
    // const onPreview = async (file) => {
    //     let src = file.url;
    //     if (!src) {
    //       src = await new Promise((resolve) => {
    //         const reader = new FileReader();
    //         reader.readAsDataURL(file.originFileObj);
    //         reader.onload = () => resolve(reader.result);
    //       });
    //     }
    //     const image = new Image();
    //     image.src = src;
    //     const imgWindow = window.open(src);
    //     imgWindow?.document.write(image.outerHTML);
    // };

    const uploader = Uploader({apiKey: 'free'});
    const uploaderOptions = {
        multi: true,
        styles: {
            color: {
                primary: "#377dff"
            }
        },
        showFinishButton: true,
        showRemoveButton: true,
    }

    const MyUploadButton = ({setFiles}) =>
        <UploadButton uploader={uploader}
                    options={uploaderOptions}
                    onComplete={setFiles}>
        {({onClick}) =>
            <BtnPost onClick={onClick}>
                Upload a file...
            </BtnPost>
        }
        </UploadButton>

    const MyUploadedFiles = ({files}) => files.map(file => {
        const filePath = file.filePath;
        const fileOriginalFileName = file.originalFile.originalFileName;
        const fileUrl  = uploader.url(filePath, "thumbnail")
        return (
        <p key={fileUrl}>
            <a href={fileUrl} target="_blank">{fileOriginalFileName}</a>
        </p>
        );
    })
    return <Row>
        <SidebarStyles span={4}>
            <Sidebar />
        </SidebarStyles>
        <ContentStyled span={20}>
            <div className="post_form">
            <TextArea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="What do you think?"
                style={{width: '60%', fontSize: '20px'}}
                autoSize={{
                minRows: 5,
                maxRows: 10,
                }}
            />
            {/* <ImgCrop rotate shape="rect" zoom>
            <ImagePost
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
            >
                {fileList.length < 20 && '+ Upload'}
            </ImagePost>
            </ImgCrop> */}
            {files.length 
                ? <MyUploadedFiles files={files} /> 
                : <MyUploadButton setFiles={setFiles} />
            }
            <Button type='primary' size='large' >Post</Button>
            </div>
        </ContentStyled>
    </Row>
}

export default Create;