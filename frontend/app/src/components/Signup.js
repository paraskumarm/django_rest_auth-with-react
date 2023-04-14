// import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import {onSignup} from "../helpers/onSignup";
function Signup() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [mobile, setmobile] = useState("");
  const [address, setaddress] = useState("");
  const [email, setemail] = useState("");
  let signup=()=>{
    onSignup({username,password,email,mobile,address}).then((res)=>console.log(res)).catch((e)=>console.log(e));
  }
  return (
    <div classusername="App">
      <h1>SIGNUP </h1>
      <div>
        username
        <input
          type="text"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        PWD
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        EMAIL
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        MOBILE
        <input
          type="text"
          value={mobile}
          onChange={(e) => setmobile(e.target.value)}
        />
        ADDRESS
        <input
          type="text"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
        />
      </div>
      
      <button onClick={signup}>SIGNUP</button>
      <br />
      <Link to="/login">Already have Account? </Link>
    </div>
  );
}

export default Signup;
