import React, {useState} from 'react';


function InputBox() {
    let[email, setEmail] = useState("");
    let[passowrd, setPassword] = useState("");
    console.log(email,passowrd);
  return (
    <div>
        <input 
        className="User Name"
        type="text" 
        value= {email} 
        onChange={ (event) => {
            setEmail(event.target.value);
        } }
        />
        <br />
        <br />
        <input
        className="Password" 
        type="password" 
        value= {passowrd} 
        onChange={ (event) => {
            setPassword(event.target.value);
        } }
        />
        <br />
        <br />
        <button>Submit</button>
    </div>
  );
}

export default InputBox;
