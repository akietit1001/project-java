import { useState } from 'react';
import { ROUTE } from '../../utils/constants';
import classnames from 'classnames/bind';
import styles from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import images from '../../assets';

const cx = classnames.bind(styles);

function Login() {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handledSubmit = () =>{
        navigate(ROUTE.HOME.URL);
    }
    return <div className={cx('wrapper')}>
        <div className={cx('inner')}>
            <img className={cx('logo')} src = {images.logo} alt='logo'/>
            <div className={cx('form-login')}>
            <FormControl sx={{ m: 1, width: '35ch'}} variant="filled">
                <InputLabel htmlFor="filled-adornment-email" sx={{fontSize: '14px'}}>Email or Phone Number</InputLabel>
                <FilledInput
                    id="filled-adornment-account-name"
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}
                    sx={{fontSize: '16px'}}
                />
                </FormControl>
                <FormControl sx={{ m: 1, width: '35ch'}} variant="filled">
                <InputLabel htmlFor="filled-adornment-password" sx={{fontSize: '14px'}}>Password</InputLabel>
                <FilledInput
                    id="filled-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                    sx={{fontSize: '16px'}}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
                </FormControl>
                <Button className={cx('btn-login')} variant="contained" sx={{
                    borderRadius: '20px',
                    backgroundColor: '#115CCD',
                    width: '80%',
                    marginTop: '20px',
                    fontSize: '16px'
                }}
                onClick={handledSubmit}
                >SIGN IN</Button>

                <span className={cx('options')}>
                    <Link className={cx('forget-password')} to={ROUTE.FORGET_PASSWORD.URL}>Forget Password</Link>
                    or
                    <Link className={cx('register')} to={ROUTE.REGISTER.URL}>Register</Link>
                </span>
            </div>
        </div>
    </div>

}

export default Login;