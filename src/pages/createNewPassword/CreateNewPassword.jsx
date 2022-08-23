import axios from "axios";
import React,{useState} from 'react'
import Button from "../../subComponents/button/Button";
import Styles from "./createNewPassword.module.css";
import loginLogo from "./../../assets/icons/loginLogo.svg";
import {useParams,useNavigate} from 'react-router-dom'
import { backend_url } from "../../constant";

function CreateNewPassword() {
  let params = useParams();
  const navigate = useNavigate()
  const [newpassword,setnewpassword]=useState("")
  const [confirmpassword,setconfirmpassword]=useState("")
  const resetPassword=async()=>{
    try{
    if(newpassword===confirmpassword){
      console.log(params.email)
    const resetPasswordResponse = await axios.put(`${backend_url}eqa/resetpassword`,{
      "email":params.email,
      "newpassword":newpassword,
      "confirmpassword":confirmpassword
    })
    console.log(resetPasswordResponse)
    if(resetPasswordResponse.status===200){
      alert("password change")
      navigate("/login")
    }
    }else{
      alert("New password and confirm password are not sames")
    }
    }catch(error){
      alert(error.response.data.error)
    }
  }
  return (
    <div className={Styles.container}>
      <div className={Styles.logo}>
        <img src={loginLogo} alt="" />
      </div>
      <div className={Styles.content}>
        <div className={Styles.header}>
          <div className={Styles.title}>Create New password</div>
          <div className={Styles.subtitle}>
            Create a strong password for better security{" "}
          </div>
        </div>
        <div className={Styles.form}>
          <div className={Styles.inputItem}>
            <label htmlFor="newPass">New Password</label>
            <input onChange={(e)=>setnewpassword(e.target.value)} value={newpassword} type="password" name="" id="newPass" />
          </div>
          <div className={Styles.inputItem}>
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <input onChange={(e)=>setconfirmpassword(e.target.value)} value={confirmpassword} type="password" name="" id="confirmPassword" />
          </div>
          <div className={Styles.btn}>
            <Button onClickConfirm={()=>resetPassword()} data="Confirm" styles={{ maxWidth: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNewPassword;
