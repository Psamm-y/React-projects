import React, { useState } from 'react';
import './form.css';
const Form = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errorUserName, setErrorUserName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

  const [userColor, setUserColor] = useState('');
  const [emailColor, setEmailColor] = useState('');
  const [passwordColor, setPasswordColor] = useState('');
  const [confirmPasswordColor, setConfrimPasswordColor] = useState('');

  const validate = (e) => {
    e.preventDefault();
  };
  return (
    <div className="card">
      <div className="card-image"></div>
      <form>
        <input
          type="text"
          placeholder="Name"
          style={{ borderColor: userColor }}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <p className="error">{errorUserName}</p> {/*to display error if any*/}
        <input
          type="email"
          placeholder="Email"
          value={email}
          style={{ borderColor: emailColor }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="error">{errorEmail}</p>
        <input
          type="password"
          placeholder="Password"
          value={password}
          style={{ borderColor: passwordColor }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="error">{errorPassword}</p>
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          style={{ borderColor: confirmPasswordColor }}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <p className="error">{errorConfirmPassword}</p>
        <button className="submit-btn" onClick={validate}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
