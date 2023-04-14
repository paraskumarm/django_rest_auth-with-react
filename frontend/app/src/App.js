
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setname] = useState("");
  const [pwd, setpwd] = useState("");
  const [email, setemail] = useState("");
  return (
    <div className="App">
      <h1>ASSIGNMENT</h1>
      <div>
        <h1>LOGIN </h1>
        <div>
          NAME<input type="text" value={name} onChange={(e) => setname(e.target.value)} />
          PWD<input type="text" value={pwd} onChange={(e) => setpwd(e.target.value)} />
          EMAIL<input type="text" value={email} onChange={(e) => setemail(e.target.value)} />
        </div>
        <button>LOGIN</button>
      </div>
      <div>
        <h1>SIGNIN </h1>
        <div>
          NAME<input type="text" value={name} />
          PWD<input type="text" value={pwd} />
          EMAIL<input type="text" value={email} />
        </div>
        <button>SIGNIN</button>
      </div>

    </div>
  );
}

export default App;
