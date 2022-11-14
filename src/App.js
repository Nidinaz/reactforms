import { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState()


  const registerationForm = {
    email: 'Dori@gmail.com',
    password: '',
    confirm_password: ''
  }

  return (
    <div className='register-form'>
      <div>
        <input type={'email'} name="email" placeholder='Email' value={registerationForm.email}></input>
      </div>
      <div>
        <input type={'password'} name="password" placeholder='Password'></input>
      </div>
      <div>
        <input type={'password'} name="confirm_password" placeholder='Confirm Password'></input>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
