import React from 'react';
import './Signup.css';
import logo from '../Images/main-logo.png';
import swal from 'sweetalert';

function Signup() {
 const signupnow = ()=>{
    var email = document.getElementById("email1").value;
    var pass = document.getElementById("pass1").value;
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', pass);
    if (email==="" || pass===""){
      swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    } else {
      swal({
        icon: 'success',
        title: 'Congratulations!',
        text: 'Successfully Signed Up!',
        
      })
    }
    
 }
  return (
    <>
<div className='container-fluid box'>
<div className='main'>
  <img src={logo} alt='jsah'/>
  <h3>Sign Up Now</h3>
<input className='inp' type='text' placeholder='E Mail' id="email1"></input>
<input className='inp' type='Password' placeholder='Password' id='pass1'></input>
<button className='btn btn-primary my-3 mx-2' onClick={signupnow}>Sign Up</button>
Already Have an Account?<a href='/signin'>Sign In Now</a>
</div>
</div>
</>
  )
}

export default Signup
