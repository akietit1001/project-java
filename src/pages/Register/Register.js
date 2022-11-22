import { useState } from 'react';
import { ROUTE } from '../../utils/constants';
import classnames from 'classnames/bind';
import styles from './Register.module.scss';
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


function Register() {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [account, setAccount] = useState('');
    const [conformPassword, setConformPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handledSubmit = () =>{
        // navigate(ROUTE.HOME.URL);
    }
    return <div className={cx('wrapper')}>
        <div className={cx('inner')}>
            <img className={cx('logo')} src = {images.logo} alt='logo'/>
            <div className={cx('form-register')}>
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
                
                <FormControl sx={{ m: 1, width: '35ch'}} variant="filled">
                <InputLabel htmlFor="filled-adornment-name" sx={{fontSize: '14px'}}>Full Name</InputLabel>
                <FilledInput
                    id="filled-adornment-name"
                    onChange={(e)=>{
                        setName(e.target.value);
                    }}
                    sx={{fontSize: '16px'}}
                />
                </FormControl>
                
                <FormControl sx={{ m: 1, width: '35ch'}} variant="filled">
                <InputLabel htmlFor="filled-adornment-account" sx={{fontSize: '14px'}}>Account Name</InputLabel>
                <FilledInput
                    id="filled-adornment-account-name"
                    onChange={(e)=>{
                        setAccount(e.target.value);
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
                
                <FormControl sx={{ m: 1, width: '35ch'}} variant="filled">
                <InputLabel htmlFor="filled-adornment-conform_password" sx={{fontSize: '14px'}}>Conform Password</InputLabel>
                <FilledInput
                    id="filled-adornment-conform_password"
                    onChange={(e)=>{
                        setConformPassword(e.target.value);
                    }}
                    sx={{fontSize: '16px'}}
                />
                </FormControl>
                <Button className={cx('btn-register')} variant="contained" sx={{
                    borderRadius: '20px',
                    backgroundColor: '#115CCD',
                    width: '80%',
                    marginTop: '20px',
                    fontSize: '16px'
                }}
                onClick={handledSubmit}
                >SIGN UP</Button>

                <span className={cx('options')}>
                    <Link className={cx('login')} to={ROUTE.LOG_IN.URL}>Login</Link>
                </span>
            </div>
        </div>
    </div>
}

export default Register;