import React, { useState } from 'react'
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [email , setEmail]=useState("");
    const [password , setPassword]=useState("");
    const navigate = useNavigate();
  //These are two functions. One handles changes to email input field, and other changes to the password input field.
    const handleEmail = (e) => {
        setEmail(e.target.value);
      };
      const handlePassword = (e) => {
        setPassword(e.target.value);
      };
        //this function is for to navigate to dashboard page if user have account  
    const loginfun = (e) => {
        e.preventDefault();
    const getData = localStorage.getItem('data')
    const jsonData = JSON.parse(getData)
    if(jsonData?.email == email.toLowerCase() && jsonData?.password == password){
        navigate('/dashboard')
    } else{
        alert("Please SingUp First")
    }
    };
         //this function is for to navigate to signup page
    const naviSignup = (e) => {
        e.preventDefault();
        navigate('/signup')}

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={loginfun} >

                <h1 className={styles.heading}>Login</h1>
                <div className={styles.feilds}>
                    <input type="email" className={styles.inputFeild} placeholder='email' value={email} onChange={handleEmail} />
                </div>
                <div className={styles.feilds}>
                    <input type="password" className={styles.inputFeild} placeholder='password' value={password} onChange={handlePassword} />
                </div>
                <div className={styles.btn}>
                    <button className={styles.btn1} type='submit'>Login</button>
                    <button className={styles.btn2} onClick={naviSignup}>Signup</button>
                </div>




            </form>
           
        </div>
    )
}

export default Login;
