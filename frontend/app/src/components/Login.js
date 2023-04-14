// import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import {onLogin} from "../helpers/onLogin";
function Login() {
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  let login=()=>{
    onLogin({email,password}).then((res)=>console.log(res)).then((e)=>console.log(e));
  }
  return (
    <div className="App">
      <h1>LOGIN </h1>
      <div>
        EMAIL
        <input
          type="text"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        PWD
        <input
          type="text"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>
      <button onClick={login}>LOGIN</button>
      <br />
      <Link to="/signin">Create An Account</Link>
    </div>
  );
}

export default Login;
