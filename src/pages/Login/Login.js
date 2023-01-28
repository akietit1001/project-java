import { useState, useEffect } from 'react';
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
import userApi from '../../apis/userApi';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../redux/reducers/user';
import { useLocation } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';

const cx = classnames.bind(styles);

function Login() {
    // const userStore = useUser() || {}
    // const {isLogged} = userStore || {};
    const user = useSelector(state => state.users);
    const {isLogged} = user;
    const location = useLocation();
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    useEffect(()=>{
    if (isLogged) {
      if (location.state?.from) {
        navigate(location.state.from);
      } else {
        navigate("/", { replace: false });
      }
    }
    },[isLogged]);
    
    const onSubmit = async ()=>{
        try {
            const params = {
                username: username,
                password: password,
            }
            // const res = JSON.parse(localStorage.getItem('user'))
            // dispatch(signIn(res))
            const response = await userApi.signIn(params);
            const token = response?.accessToken;
            localStorage.setItem('user', JSON.stringify(response));
            localStorage.setItem('accessToken', token);
            dispatch(signIn(response));
            navigate(ROUTE.HOME.URL);
        } catch (error) {
            setError(error.message);
        }
    }
    
    return <div className={cx('wrapper')}>
        <div className={cx('inner')}>
            <img className={cx('logo')} src = {images.logo} alt='logo'/>
            {error && (<div className={cx('error-message')}>
                Error: {error} !!!
            </div>)}
            <div className={cx('form-login')}>
            <FormControl sx={{ m: 1, width: '35ch'}} variant="filled">
                <InputLabel htmlFor="filled-adornment-username" sx={{fontSize: '14px'}}>User Name</InputLabel>
                <FilledInput
                    id="filled-adornment-username"
                    onChange={(e)=>{
                        setUsername(e.target.value);
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
                onClick={onSubmit}
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