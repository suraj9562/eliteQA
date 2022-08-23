import Styles from "./button.module.css";

function Button({ data, styles,loginClick,onClickConfirm,onClickSendResetLink }) {
  const callingOnClick=()=>{
    if(data==="Sign in"){
      loginClick()
    }
    if(data==="Confirm"){
      onClickConfirm()
    }
    if(data==="Send Reset Link"){
      onClickSendResetLink()
    }
  }
  return (
    <div onClick={()=>callingOnClick()} className={Styles.container} style={styles}>
      {data}
    </div>
  );
}

export default Button;
