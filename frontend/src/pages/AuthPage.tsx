import { useState } from "react";
import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp";


const AuthPage = () => {
  const [signUp ,setSignUp] = useState(false) ;

  return (
    <div className="max-w-screen h-screen p-1 flex justify-center items-center">
        {signUp ?(
          <SignUp choice={{signUp,setSignUp}} />
        ) : 
        (
          <SignIn choice={{signUp,setSignUp}} />
        )
        }
    </div>
  )
}

export default AuthPage