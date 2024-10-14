
import React from 'react'
import './Signup.css'
function Signup() {
  return (
    <div className="signup-container">
    <div className="logo-container">
        <img src="https://static.vecteezy.com/system/resources/previews/000/390/524/original/modern-company-logo-design-vector.jpg" alt="Company Logo" className="logo"/>
    </div>
   <div class="text">
    <h1> <span>Hello!</span> It's good to meet you</h1>
    <p>Fill in the form and Create your Account</p>
   </div>
    <form action="/Signup" method="POST">
        <div class="input-group">
           <div class="first">
            <label for="username">First name </label>
            <input type="text" id="username" name="username" required/>
           </div>
           
           <div className="second">
            <label for="email">Last name</label>
            <input type="email" id="email" name="email" required/>
           </div>
        </div>

        <div className="input-group">
            <div className="first">
             <label for="username">Email or phone number</label>
             <input type="text" id="username" name="username" required/>
            </div>
         </div>


         <div className="input-group">
            <div className="first">
             <label for="password">Password</label>
             <input type="password" id="username" name="username" required/>
            </div>
            
            <div className="second">
             <label for="confirm-password">confirm password</label>
             <input type="password" id="email" name="email" required/>
            </div>
         </div>
       
        <div className="checkbox">
            <label for="user-type">Select your industry</label>
        </div>
        <div className="radio-group">
           
            <input type="radio" id="user-type-1" name="user-type" value="customer" required/>
            <label for="user-type-1">Bussness</label>
            <input type="radio" id="user-type-2" name="user-type" value="employee" required/>
            <label for="user-type-2">Designer</label>
            <input type="radio" id="user-type-3" name="user-type" value="admin" required/>
            <label for="user-type-3">Retaler</label>
        </div>
       
        <input type="text" id="myInput" placeholder=" Tell Us About Your Project"/>

        <div className="laststep">
            <div className="leftlaststep">
                <div className="remember-me">
                    <input type="checkbox" id="remember-me" name="remember-me"/>
                    <label for="remember-me">Remember Me</label>
                </div>
                <div className="privcy">
                    <input type="checkbox" id="policy" name="policy"/>
                    <label for="policy">I agree to all The <span>term</span> & <span> privcy policy</span></label>
                </div>
            </div>
            <div className="rightlaststep">
                <a href="">Forget password</a>
            </div>
        </div>
        
        
        
       <div className="button">
        <button type="button" onclick="showCreateAccountForm()">Create Account</button>
        <p>Does't have an Account? <span>Log in</span></p>
       </div>
    </form>
</div>

  )
}

export default Signup
