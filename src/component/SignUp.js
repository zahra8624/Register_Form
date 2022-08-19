import React, { useEffect, useState } from 'react';
import { validation } from './validation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';
import styles from "./SignUp.module.css";
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [data, setData] = useState ({
        name : "",
        email : "",
        password : "",
        confrimpassword : "",
        isAccepted : false,
    })

    const [errors, setErrors] = useState({});
    const [touch, setTouch] = useState({});

    const focusHandler = (event) =>{
        setTouch({...touch, [event.target.name] : true})
        

    }

    

    useEffect (()=>{
        setErrors(validation(data, "signup"))
       
    }, [data, touch])


    const changeHandler = (event)=>{
        if(event.target.name === "isAccepted"){
            setData({...data, [event.target.name] : event.target.checked})
        }
        else{
            setData({...data, [event.target.name] : event.target.value})
        }

        
       
    }

    const submitHandler = (event) =>{
        event.preventDefault();
       
        if(!Object.keys(errors).length){
            notify("You sign successfully!", "success");
        }else{
            setTouch({
                name :true,
                email: true,
                password: true,
                confrimpassword :true,
                isAccepted :true
            })
            notify("Invalid data!", "error");
        }

    }

    


    return (
        <div className={styles.container}>
            <form className={styles .formContainer} onSubmit={submitHandler}> 
                <h2 className={styles .header}>Sign Up</h2>
                <div className={styles.formField}>
                    <label>Name</label>
                    <input  className={(errors.name && touch.name) ? styles.uncompleted : styles.formInput }
                     type = "text" name = "name" value = {data.name} onChange = {changeHandler} onFocus = {focusHandler}/>
                    {errors.name && touch.name && <span>{errors.name}</span>}
                </div >
                <div className={styles.formField}>
                    <label>Email</label>
                    <input className={(errors.email && touch.email) ? styles.uncompleted : styles.formInput }
                    type = "text"
                    name = "email"
                    value = {data.email}
                    onChange = {changeHandler} 
                    onFocus = {focusHandler}
                    />
                    {errors.email && touch.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Password</label>
                    <input  className={(errors.password && touch.password) ? styles.uncompleted : styles.formInput }
                     type = "password" name = "password" value = {data.password} onChange = {changeHandler} onFocus = {focusHandler}/>
                    {errors.password && touch.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Confrimpassword</label>
                    <input  className={(errors.confrimpassword && touch.confrimpassword) ? styles.uncompleted : styles.formInput }
                      type = "password" name = "confrimpassword" value = {data.confrimpassword} onChange = {changeHandler} onFocus = {focusHandler}/>
                    {errors.confrimpassword && touch.confrimpassword && <span>{errors.confrimpassword}</span>}
                </div>
                <div className={styles.formField}>
                    <div className={styles.checkBoxContainer}>
                    <label>I accept terms of privacy policy</label>
                    <input 
                    type = "checkbox" name = "isAccepted" value = {data.isAccepted} onChange = {changeHandler} onFocus = {focusHandler}/>
                    {errors.isAccepted && touch.isAccepted && <span>{errors.isAccepted}</span>}
                    </div>
                </div>
                <div className={styles.formButtons} >
                    <Link to="/login">Login</Link>
                    <button type = "submit">Sign Up</button>
                </div>
            </form>
            <ToastContainer/>
          
        </div>
    );
};

export default SignUp;