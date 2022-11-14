import { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    confirm_password: ''
  })

  const registerationForm = {
    email: 'Dori@gmail.com',
    password: '',
    confirm_password: ''
  }

  const onFieldChange = (field) => {
    setUser({
      email: field.target.value
    })
  }

  let error
  if (!user.email.includes("@")) {
    error = <strong>Please use a valid email address!</strong>
  }

  //props - name, placeholder, value

  return (
    <div className='register-form'>
      <div>
        {error}
        <input type={'email'} name="email" placeholder='Email' value={user.email} onChange={onFieldChange}></input>
      </div>
      <div>
        <input type={'password'} name="password" placeholder='Password' value={registerationForm.password}></input>
      </div>
      <div>
        <input type={'password'} name="confirm_password" placeholder='Confirm Password' value={registerationForm.confirm_password}></input>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
