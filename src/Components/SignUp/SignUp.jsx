import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import './SignUp.scss'
import TopImage from '../TopImage/TopImage'

function SignUp() {
    const [isSignUp, setIsSignUp] = useState(true)
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState("");

    const handleSignIn = () =>{
        setIsSignUp(false)
    }

     const handleSignUp = () =>{
        setIsSignUp(true)
    } 

   /*  const navigatePage = () =>{
        navigate("/")
    } */


    const navigatePage = () => {
        // Store user data in local storage
        localStorage.setItem('userData', JSON.stringify({ name, email , number}));
        navigate('/dashboard'); // Redirect to dashboard
    };

  return (
    <div className='main-signup'>
        <TopImage title={isSignUp ? "Sign Up" : "Sign In"}/>
        <div id="content">
            <div className="form">
                {isSignUp && <div className="username">
                    <h6>UserName</h6>
                    <input type="text" placeholder='UserName' value={name} onChange={(e) => setName(e.target.value)}/>
                </div>}
                <div className="email">
                    <h6>Email</h6>
                    <input type="email" name="" id="" placeholder='gymate@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="email">
                    <h6>Phone</h6>
                    <input type="text" name="" id="" placeholder='123456789' value={number} onChange={(e) => setNumber(e.target.value)}/>
                </div>
                <div className="password">
                    <h6>Password</h6>
                    <input type="password" name="" id="" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="btn" onClick={isSignUp ? navigatePage : navigatePage}>
                <button>{isSignUp ? "Sign Up" : "Sign In"}</button>
                </div>

                {isSignUp && <div className="account1 account">
                    <p className='already'>Already have account? <span onClick={handleSignIn}>Sign In</span></p>
                    <p>( Make <span>new Accout</span> or go to <span>Sign In</span> Page for Test Account)</p>
                </div>}
                {!isSignUp && <div className="account2 account ">
                    <p className='already'>New to Gymate? <span onClick={handleSignUp}>Sign Up</span></p>
                    <p><span>Test Account - </span>gymate@gmail.com <span>/</span> testpassword789</p>
                </div>}
            </div>
        </div>
    </div>
  )
}

export default SignUp
