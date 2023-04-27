import React from 'react';
import './Signin.css';
import logo from '../Images/main-logo.png';
import swal from 'sweetalert';

function Signin() {
    const signinnow = ()=>{
        var email = document.getElementById("email").value;
        var pass = document.getElementById("pass").value
        var pass1 = localStorage.getItem('Password');
        var email1 = localStorage.getItem('Email');
        if(email === email1 && pass === pass1){
          swal({
            icon: 'success',
            title: 'Congratulations!',
            text: 'Successfully Signed In!',
          })
        } else{
          swal({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        }
    }
  return (
   
<>
<div className='container'>
<div className='mains'>
<img src={logo} alt='jsah'/>
<h3>Sign In Now</h3>
<input className='inp' type='text' placeholder='E Mail' id='email'></input>
<input className='inp' type='Password' placeholder='Password' id='pass'></input>
<button className='btn btn-primary my-2 mx-2' onClick={signinnow}>Sign In</button>
Don't Have an Account?<a href='/signup'>Sign up Now</a>
</div>
</div>
</>
  )
}

export default Signin
