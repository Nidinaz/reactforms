import { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState()


  const registerationForm = {
    email: 'Dori@gmail.com',
    password: '',
    confirm_password: ''
  }

  //props - name, placeholder, value

  return (
    <div className='register-form'>
      <div>
        <input type={'email'} name="email" placeholder='Email' value={registerationForm.email}></input>
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
