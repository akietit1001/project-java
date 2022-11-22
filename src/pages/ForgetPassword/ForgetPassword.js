import { useState } from 'react';
import { ROUTE } from '../../utils/constants';
import classnames from 'classnames/bind';
import styles from './ForgetPassword.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import Button from '@mui/material/Button';
import images from '../../assets';

const cx = classnames.bind(styles);


function ForgetPassword() {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
  const handledSubmit = () =>{
        // navigate(ROUTE.HOME.URL);
    }
    return <div className={cx('wrapper')}>
        <div className={cx('inner')}>
            <img className={cx('logo')} src = {images.logo} alt='logo'/>
            <div className={cx('form-forget-password')}>
            <FormControl sx={{ m: 1, width: '35ch'}} variant="filled">
                <InputLabel htmlFor="filled-adornment-password" sx={{fontSize: '14px'}}>Email or Phone Number</InputLabel>
                <FilledInput
                    id="filled-adornment-email"
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}
                    sx={{fontSize: '16px'}}
                />
                </FormControl>
                <Button className={cx('btn-forget-password')} variant="contained" sx={{
                    borderRadius: '20px',
                    backgroundColor: '#115CCD',
                    width: '80%',
                    marginTop: '20px',
                    fontSize: '16px',
                }}
                onClick={handledSubmit}
                >{!email ? 'FORGET PASSWORD' : 'CONFORM'}</Button>

                <span className={cx('options')}>
                    <Link className={cx('login')} to={ROUTE.LOG_IN.URL}>Login</Link>
                    or 
                    <Link className={cx('register')} to={ROUTE.REGISTER.URL}>Register</Link>
                </span>
            </div>
        </div>
    </div>
}

export default ForgetPassword;