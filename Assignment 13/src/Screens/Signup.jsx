import React, { useState } from 'react'
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [userName,setUserName] =useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword] =useState("");
    const navigate = useNavigate();
//These are two functions. One handles changes to email input field, and other changes to the password input field.
    const handleUser = (e) => {
        setUserName(e.target.value);
      };
      const handleEmail = (e) => {
        setEmail(e.target.value);
      };
      const handlePassword = (e) => {
        setPassword(e.target.value);
      };
  //this function is for to navigate to login page after storing data.. 
  const create = (e) => {
    e.preventDefault();
    const data = {userName,email: email.toLowerCase(),password}
    localStorage.setItem('data', JSON.stringify(data));
    navigate("/")
  }; 
//this function we use for button to navigate to login page
  const naviLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };
      


    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={create} >
                <h1 className={styles.heading}>Signup</h1>
                <div className={styles.feilds}>
                    <input type="text" className={styles.inputFeild} value={userName} onChange={handleUser} placeholder='User Name' required/>
                </div>
                <div className={styles.feilds}>
                    <input type="email" className={styles.inputFeild} value={email} onChange={handleEmail} placeholder='Email' required />
                </div>
                <div className={styles.feilds}>
                    <input type="password" className={styles.inputFeild} onChange={handlePassword} placeholder='Password' required />
                </div>
                <div className={styles.btn}>
                    <button className={styles.btn1} type='submit'>Create Account</button>
                    <button className={styles.btn2} onClick={naviLogin} >Login</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;


