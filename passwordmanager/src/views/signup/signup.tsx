import React, { useState } from 'react'
import '../signin/signin.css'
import '../signup/signup.css'
import Button from '../../components/buttons/button'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const[pswrd,setpswrd]= useState(false)
  function togglepswrd()
  {
     setpswrd(!pswrd)
  }
  type usersType = { mobileNo: number; mPin: number };
    const navigate = useNavigate();

    if (localStorage.getItem('users') === null) {
        localStorage.setItem(
            'user Data',
            JSON.stringify(
                localStorage.setItem(
                    'users',
                    JSON.stringify([
                        { mobileNo: '7204975671', mPin: '9036' },
                    ])
                )
            )
        );
    }
    const signUpHandler = (e: any) => {
      e.preventDefault();

      const mobileNo: number = e.target.mobileNo.value;
      const newMPin: number = e.target.mpin.value;
      const confirmMpin: number = e.target.confirmMPin.value;

      const userData = { mobileNo, mPin: newMPin };

      const previousData: usersType[] = JSON.parse(
          localStorage.getItem('users') || '[]'
      );

      console.log('userData', previousData);
      console.log('userData', { mobileNo, newMPin });
      if (previousData.length > 0 && mobileNo) {
          const mappedUser = previousData.map((user) => {
              if (user.mobileNo === mobileNo) {
                  return 'user';
              }
              return 'no user';
          });

          if (newMPin === confirmMpin) {
              if (mappedUser.includes('user')) {
                  alert('user already exist');
              } else if (mappedUser.includes('no user')) {
                  previousData.push(userData);
                  sessionStorage.setItem('signUpSuccess', 'true');
                  navigate('/');

                  localStorage.setItem(JSON.stringify(mobileNo), '[]');
                  window.location.reload();
              }
          } else {
              alert('mPin does not match');
          }

          console.log('pre', previousData);
          localStorage.setItem('users', JSON.stringify(previousData));
      } else if ((previousData.length = 0 && mobileNo)) {
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
      <div>
        <form className='form' onSubmit={signUpHandler}>
          <div className='heading'>SIGN UP</div>
          <div >
            <input type="text" name= 'mobileNo'className='mnumber' placeholder='Enter Mobile Number' />
          </div>
          <input type="password" name="mpin"className='mnumber' placeholder='Enter 4 Digit MPin' />
          <div className='toggle'>
          <input type= {pswrd?'text':'password'} className='mnumber' name="confirmMPin" placeholder='Re-Enter 4 Digit MPin' />
          <img src= {require("../../assets/images/eye_on.png")} alt="" className='eye' onClick={togglepswrd} />

          </div>
        
            <div className='signupbtn'><Button value="SIGN UP"/></div>
           

        </form>
      </div>
    </div>
  )
}

export default Signup