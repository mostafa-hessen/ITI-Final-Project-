import './Login.css'
import {   useHistory} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import React, { useState } from "react";


function Login(){
  const [err, setErr] = useState(false);
  const navigate = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayEmail = e.target[0].value;
    const displayPassword = e.target[1].value;
    try {
      const res= await signInWithEmailAndPassword(auth, displayEmail, displayPassword);
      let y= res.user.displayName
      console.log(y);
      let x= res.user.displayName.split('@')[1]
      localStorage.setItem('user',JSON.stringify(res.user))
      sessionStorage.setItem(`authorized${x}`,true)
      console.log(x)

     x=='user' ?navigate.push("/HomeUser"):navigate.push("/HomeCooker")

    } catch (err) {
      console.log(err);
      setErr(true);
    }
  };
return(
    <>
    <div className="formContainer">
      <div className="formWrapper1">
        <span className="logo">الاكيله</span>
        {/* <span className="title">تسجيل الدخول </span> */}
        <form onSubmit={handleSubmit} >
          <input type="email" placeholder="أدخل البريد الالكتروني" />
          <input type="password" placeholder="أدخل كلمه السر " />
          {err && <span style={{color:'red',direction :'rtl'}}>ادخل البريد الالكتروني او الرقم السر صحيحا </span>}
          <button>تسجيل الدخول</button>
         
        </form>
        {/* <p>You don't have an account? <a href="/register">Register</a></p> */}
      </div>
    </div>
    
    </>
)

}
export default Login