import React, { useEffect, useState } from 'react';
import { validation } from './validation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';
import styles from "./SignUp.module.css";
import { Link } from 'react-router-dom';

const  Login = () => {

    const [data, setData] = useState ({
       
        email : "",
        password : "",
        
    })

    const [errors, setErrors] = useState({});
    const [touch, setTouch] = useState({});

    const focusHandler = (event) =>{
        setTouch({...touch, [event.target.name] : true})
        

    }

    

    useEffect (()=>{
        setErrors(validation(data,"login"))
       
    }, [data, touch])


    const changeHandler = (event)=>{
        if(event.target.name === "isAccepted"){
            setData({...data, [event.target.name] : event.target.checked})
        }
        else{
            setData({...data, [event.target.name] : event.target.value})
        }

        console.log(data)
       
    }

    const submitHandler = (event) =>{
        event.preventDefault();
       
        if(!Object.keys(errors).length){
            notify("You Logged in successfully!", "success");
        }else{
            setTouch({
                
                email: true,
                password: true,
                
            })
            notify("Invalid data!", "error");
        }

    }

    


    return (
        <div className={styles.container}>
            <form className={styles .formContainer} onSubmit={submitHandler}> 
                <h2 className={styles .header}>Sign Up</h2>
                
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
                
              
               
                <div className={styles.formButtons} >
                    <Link to="/signup">Sign Up</Link>
                    <button type = "submit">Login</button>
                </div>
            </form>
            <ToastContainer/>
          
        </div>
    );
};

export default Login;