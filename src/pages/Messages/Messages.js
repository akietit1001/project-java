import styles from './Messages.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../../layouts/Sidebar/Sidebar';

const cx = classNames.bind(styles);

function Messages() {
    // let photos = [];
    // fetch('https://jsonplaceholder.typicode.com/photos')
    //     .then(response => response.json())
    //     .then(json => {
    //         photos = json.slice(0, 10);
    //     })
    
    return <div className={cx('wrapper')}>
        <div className={cx('sidebar')}><Sidebar /></div>
        <div className={cx('content')}>
            <div className={cx('inner')}>
                {/* {photos.map((photo, index)=>{
                    return <div className={cx('post')} key={index}>
                        <nav className={cx('header')}>
                        <img src={photo?.thumbnailUrl} alt="img" className={cx('avatar')}/>
                        <span className={cx('name-user')}></span>
                    </nav>
                    <div className={cx('post-photo')}>
                        <span className={cx('title')}>{photo?.title}</span>
                        <img src={photo?.url} className={cx('photo')}/>
                    </div>
                </div>
                })} */}
            </div>
        </div>
    </div>;
}

export default Messages;