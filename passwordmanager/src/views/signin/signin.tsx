import React, { useState } from 'react'
import '../signin/signin.css'
import Button from '../../components/buttons/button'
import { Link, useNavigate } from 'react-router-dom'


const Signin = () => {
  const [pswrd, setpswrd] = useState(false)
  const navigate = useNavigate();
  const togglePassword = () => {
    setpswrd(!pswrd)
  }
  if (localStorage.getItem('users') === null) {
    localStorage.setItem(
        'user Data',
        JSON.stringify(
            localStorage.setItem(
                'users',
                JSON.stringify([
                    { mobileNo: '9036825554', mPin: '9036' },
                ])
            )
        )
    );
}
const loginHandler = (e: any) => {
  e.preventDefault();
  type usersType = { mobileNo: number; mPin: number };
  console.log(e.target);


  const mobileNo = e.target.mobileNo.value;
  const mPin = e.target.mPin.value;

  const userData = { mobileNo, mPin };
  console.log('userData', userData);

  const users: usersType[] = JSON.parse(
      localStorage.getItem('users') || '[]'
  );
  console.log('users', users);

  for (let i = 0; i < users.length; i++) {
      if (userData.mobileNo === users[i].mobileNo) {
          if (userData.mPin === users[i].mPin) {
              localStorage.setItem('auth', 'authenticated');
              navigate('/Home');
              localStorage.setItem('currentUser', mobileNo);
              window.location.reload();
          }
      }
  }
};

  return (
    <div className='rectangle'>
      <div className='leftlogin'>
        <img src={require("../../assets/images/logo.png")} alt="" className='logo' />
        <p className='protect-manage-eve'>Protect & Manage every
          password in your business</p>
      </div>
      <div className='separator'></div>
      <div className='outerbox'>
        <form className='form' onSubmit={loginHandler}>
          <div className='title'>SIGN IN TO YOUR ACCOUNT</div>
          <div >
            <input type="text" name="mobileNo" className='mnumber' placeholder='Mobile Number' />
          </div>
          <div className='toggle'>
            <input type={pswrd ? "text" : "password"}  name="mPin" className='mnumber' placeholder='MPin' />
            <img src={require("../../assets/images/eye_on.png")} alt="" className='eye' onClick={togglePassword} />

          </div>

          <div className='forgot'>
            <div className='forgotpswd'>Forgot your password?</div>

            <div className='loginbtn'><Button value="SIGN IN" /></div>
            <div className='dnthave'>Don't have a Account ? <Link to='/signup' className='link'>SIGNUP</Link></div>
          </div>

        </form>
      </div>
    </div>
  )
}


export default Signin