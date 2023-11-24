import "./Login.css"
import Facebook from "./images/facebook.png"
import Google from "./images/google.png"
export function Login(){
    return(
        <div className="login-bg">
            <div className="login-text">Login</div>
            <div className="sign-up">
                Doesn't Have An Account? <span>Sign-Up</span>
                </div>
                <div className="login-box">
               <div className="username-input">
                <div className="username-title">
                    Username
                </div>
                <input type="text" placeholder="Enter Username" />
               </div>
               <div className="password-input">
                <div className="password-title">
                    <div className="password-title-pass">Password</div>
                    <div className="password-title-forgot">Forgot Password?</div>
                </div>
                <input type="text" placeholder="Enter Password" />
               </div>
               <div className="login-button-login">Login</div>
               <div className="or-login">
               <div className="line-accounts"></div>
<div className="or">or</div>
<div className="line-accounts">
</div>
               </div>
               <div className="social-login">
               <div className="login-with-google">
               <img src={Google} alt="google" />
               </div>
               <div className="login-with-facebook">
               <img src={Facebook} alt="facebook" />
               </div>
                </div>
                </div>
            </div>
        
    );
}