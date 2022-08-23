import React,{useState} from 'react'
import axios from 'axios';
import Styles from "./../login/login.module.css";
import loginLogo from "./../../assets/icons/loginLogo.svg";
import Button from "./../../subComponents/button/Button";
import thumbUp from "../../assets/images/Group_5.svg";
import avatarOne from "../../assets/images/roundAvatarOne.svg";
import avatarTwo from "../../assets/images/roundAvatarTwo.svg";
import avatarThree from "../../assets/images/roundAvatarThree.svg";
import threeDots from "../../assets/images/threeDots.svg";
import ellipseOne from "../../assets/images/ellipseOne.svg";
import ellipseTwo from "../../assets/images/ellipseTwo.svg";
import PasswordResetDoneCard from "../../subComponents/passwordResetDoneCard/PasswordResetDoneCard";
import { backend_url } from '../../constant';
function PasswordReset() {
  const [email,setemail]=useState("")
  const forgotPassword=async()=>{
    try{
    const forgotPasswordResponse = await axios.post(`${backend_url}eqa/forgotpassword`,{
      "email":email
    }) 
    if(forgotPasswordResponse.status===200){
      alert("Forgot password link forwaded on your email")
    }
    }catch(error){
      alert(error.response.data.error)
    }
  }
  return (
    <div className={Styles.container}>
      <div className={Styles.left}>
        <div className={Styles.logo}>
          <img src={loginLogo} alt="" />
        </div>
        <div className={Styles.header}>
          <div className={Styles.title}>Let’s reset password</div>
          <div className={Styles.subtitle}>
            We will send reset link to the following email{" "}
          </div>
        </div>
        <div className={Styles.form}>
          <div className={Styles.inputItem}>
            <label htmlFor="userName">Email</label>
            <input onChange={(e)=>setemail(e.target.value)} value={email} type="email" name="" id="userName" />
          </div>

          <div className={Styles.btn}>
            <Button onClickSendResetLink={()=>forgotPassword()} data="Send Reset Link" styles={{ maxWidth: "100%" }} />
          </div>
        </div>

        {/* <PasswordResetDoneCard /> */}
      </div>
      <div className={Styles.right}>
        <img src={ellipseOne} alt="thumbs up" className={Styles.ellipseOne} />
        <img src={ellipseTwo} alt="thumbs up" className={Styles.ellipseTwo} />
        <div className={Styles.boxOne}>
          <img src={thumbUp} alt="thumbs up" />
          <div className={Styles.boxText}>
            <span className={Styles.textOne}>135</span>
            <br />
            <span className={Styles.textTwo}>Companies Using ElteQA</span>
          </div>
        </div>
        <div className={Styles.imageContainerOne}>
          <img src={avatarOne} alt="thumbs up" />
          <img src={avatarTwo} alt="thumbs up" />
        </div>
        <div className={Styles.imageContainerTwo}>
          <img src={avatarThree} alt="thumbs up" />
          <div className={Styles.boxTwo}>
            <div className={Styles.boxText}>
              <span className={Styles.textOne}>Name here</span>
              <br />
              <span className={Styles.textTwo}>
                Hiring is now peice of cake!
              </span>
            </div>
          </div>
        </div>

        <div className={Styles.subText}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu
            ipsum, mollis non erat vitae, vulputate ultrices dui
          </p>
          <img src={threeDots} alt="thumbs up" />
        </div>
      </div>
    </div>
  );
}

export default PasswordReset;
