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
import { DatePicker, Radio, Checkbox } from 'antd';
import Button from '@mui/material/Button';
import images from '../../assets';
import userApi from '../../apis/userApi';
const dayjs = require('dayjs')


const cx = classnames.bind(styles);


function Register() {
    let navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [occupation, setOccupation] = useState('');
    const [birthDay, setBirthDay] = useState('');
    const [gender, setGender] = useState('');
    const [role, setRole] = useState(['Admin']);
    const [password, setPassword] = useState('');
    const [conformPassword, setConformPassword] = useState('');
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [error, setError] = useState([]);
    const roleOptions = [
        {
            label: 'Admin',
            value: 'Admin',
        },
        {
            label: 'User',
            value: 'User',
        }
        
    ];
    const handleClickShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };
  const handleClickShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };
    const onSubmit = async ()=>{
    try {
        const params = {
            username: userName,
            email: email,
            firstname: firstName,
            lastname: lastName,
            phonenumber: phone,
            occupation: occupation,
            birthday: birthDay,
            genDer: gender,
            role: role,
            address: address,
            password: password,
        }
        if(password === conformPassword) {
            await userApi.signUp(params);
        }
        else{
            throw new Error("Invalid password");
        }
        navigate(ROUTE.LOG_IN.URL);
    } catch (error) {
        setError(error.message);
    }
    }
    return <div className={cx('wrapper')}>
        <div className={cx('inner')}>
            <img className={cx('logo')} src = {images.logo} alt='logo'/>
            <div className={cx('form-register')}>

            <FormControl sx={{ m: 1, width: '35ch'}} variant="filled">
                <InputLabel htmlFor="filled-adornment-username" sx={{fontSize: '14px'}}>Username</InputLabel>
                <FilledInput
                    id="filled-adornment-username"
                    required = {true}
                    onChange={(e)=>{
                        setUserName(e.target.value);
                    }}
                    sx={{fontSize: '16px'}}
                />
            </FormControl>

            <FormControl sx={{ m: 1, width: '35ch'}} variant="filled">
                <InputLabel htmlFor="filled-adornment-email" sx={{fontSize: '14px'}}>Email</InputLabel>
                <FilledInput
                    id="filled-adornment-email"
                    type='email'
                    required = {true}
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}
                    sx={{fontSize: '16px'}}
                />
            </FormControl>

            <FormControl sx={{ m: 1, width: '35ch'}} variant="filled">
                <InputLabel htmlFor="filled-adornment-first-name" sx={{fontSize: '14px'}}>First Name</InputLabel>
                <FilledInput
                    id="filled-adornment-first-name"
                    required = {true}
                    onChange={(e)=>{
                        setFirstName(e.target.value);
                    }}
                    sx={{fontSize: '16px'}}
                />
            </FormControl>
                
            <FormControl sx={{ m: 1, width: '35ch'}} variant="filled">
                <InputLabel htmlFor="filled-adornment-last-name" sx={{fontSize: '14px'}}>Last Name</InputLabel>
                <FilledInput
                    id="filled-adornment-last-name"
                    required = {true}
                    onChange={(e)=>{
                        setLastName(e.target.value);
                    }}
                    sx={{fontSize: '16px'}}
                />
            </FormControl>

            <FormControl sx={{ m: 1, width: '35ch'}} variant="filled">
                <InputLabel htmlFor="filled-adornment-phone" sx={{fontSize: '14px'}}>Phone Number</InputLabel>
                <FilledInput
                    id="filled-adornment-phone"
                    required = {true}
                    onChange={(e)=>{
                        setPhone(e.target.value);
                    }}
                    sx={{fontSize: '16px'}}
                />
            </FormControl>
                
            <FormControl sx={{ m: 1, width: '35ch'}} variant="filled">
                <InputLabel htmlFor="filled-adornment-address" sx={{fontSize: '14px'}}>Address</InputLabel>
                <FilledInput
                    id="filled-adornment-address"
                    required = {true}
                    onChange={(e)=>{
                        setAddress(e.target.value);
                    }}
                    sx={{fontSize: '16px'}}
                />
            </FormControl>
            
            <FormControl sx={{ m: 1, width: '35ch'}} variant="filled">
                <InputLabel htmlFor="filled-adornment-occupation" sx={{fontSize: '14px'}}>Occupation</InputLabel>
                <FilledInput
                    id="filled-adornment-occupation"
                    required = {true}
                    onChange={(e)=>{
                        setOccupation(e.target.value);
                    }}
                    sx={{fontSize: '16px'}}
                />
            </FormControl>

            <DatePicker 
                style={{width: '95%', margin: '10px 0'}}
                placeholder="Select birthday"
                size='large'
                onChange={(date, dateString)=>{
                    setBirthDay(dateString);
                }}
            />

            <Radio.Group onChange={(e)=>{
                setGender(e.target.value)
            }} value={gender}
            size='large'
            style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '40%'}}>
                    <Radio value={"male"}>Male</Radio>
                    <Radio value={"female"}>Female</Radio>
            </Radio.Group>

            <Checkbox.Group onChange={(value)=>{
                setRole(value);
            }}
                options={roleOptions}
                defaultValue={['Admin']}
                style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '40%'}}
            >

            </Checkbox.Group>

            <FormControl sx={{ m: 1, width: '35ch'}} variant="filled">
                <InputLabel htmlFor="filled-adornment-password" sx={{fontSize: '14px'}}>Password</InputLabel>
                <FilledInput
                    id="filled-adornment-password"
                    required = {true}
                    type={showPassword1 ? 'text' : 'password'}
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                    sx={{fontSize: '16px'}}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword1}
                        edge="end"
                        >
                        {showPassword1 ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
            </FormControl>
                
            <FormControl sx={{ m: 1, width: '35ch'}} variant="filled">
                <InputLabel htmlFor="filled-adornment-conform_password" sx={{fontSize: '14px'}}>Conform Password</InputLabel>
                <FilledInput
                    id="filled-adornment-conform_password"
                    required = {true}
                    type={showPassword2 ? 'text' : 'password'}
                    onChange={(e)=>{
                        setConformPassword(e.target.value);
                    }}
                    sx={{fontSize: '16px'}}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword2}
                        edge="end"
                        >
                        {showPassword2 ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
            </FormControl>

            <Button className={cx('btn-register')} variant="contained" sx={{
                    borderRadius: '20px',
                    backgroundColor: '#115CCD',
                    width: '80%',
                    marginTop: '20px',
                    fontSize: '16px'
                }}
                onClick={onSubmit}
                >SIGN UP</Button>

                <span className={cx('options')}>
                    <span>I have an account. </span>
                    <Link className={cx('login')} to={ROUTE.LOG_IN.URL}>Login Now</Link>
                </span>
            </div>
        </div>
    </div>
}

export default Register;