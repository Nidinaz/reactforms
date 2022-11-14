import { useState } from 'react';
import './App.css';

function App() {

  const [user, setUser] = useState({
    email: '',
    password: '',
    confirm_password: ''
  })

  // const registerationForm = {
  //   email: 'Dori@gmail.com',
  //   password: '',
  //   confirm_password: ''
  // }

  const onEmailChange = (field) => {
    setUser({
      email: field.target.value,
      password: user.password,
      confirm_password: user.confirm_password
    })
  }

  // let error
  // if (!user.email.includes("@")) {
  //   error = <strong>Please use a valid email address!</strong>
  // }

  const onPasswordChange = (field) => {
    setUser({
      email: user.email,
      password: field.target.value,
      confirm_password: user.confirm_password
    })
  }

  const onConfirmPasswordChange = (field) => {
    setUser({
      email: user.email,
      password: user.password,
      confirm_password: field.target.value
    })
  }

  const onSubmit = () => {
    window.alert(JSON.stringify(user))
  }

  //props - name, placeholder, value

  return (
    <div className='register-form'>
      <div>
        {/* {error} */}
        <input type={'email'} name="email" placeholder='Email' value={user.email} onChange={onEmailChange}></input>
      </div>
      <div>
        <input type={'password'} name="password" placeholder='Password' value={user.password} onChange={onPasswordChange}></input>
      </div>
      <div>
        <input type={'password'} name="confirm_password" placeholder='Confirm Password' value={user.confirm_password} onChange={onConfirmPasswordChange}></input>
      </div>
      <div>
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default App;
