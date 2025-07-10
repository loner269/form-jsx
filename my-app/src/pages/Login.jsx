import { useState } from 'react';
import Email from '../components/Email';
import Password from '../components/Password';
import Alert from '../components/Alert';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  function handleLogin(e) {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.email === email && user.password === password);
    if (!email || !password) {
      setError('Please fill in all inputs');
      setTimeout(() => {
        setError('');
      }, 2000);
    } else if (user){
      alert(`Welcome back, ${user.firstName}!`);
      setTimeout(() => {
        setEmail('');
        setPassword('');
      }, 500);
    } else  {
      setError('Invalid email or password');
      setTimeout(() => {
        setError('');
      }, 2000);
    }
  }

  return (
    <form className='flex flex-col  w-full' onSubmit={handleLogin}>
      <Email email={email} setEmail={setEmail} />
      <Password password={password} setPassword={setPassword} />
      <div className='flex flex-col justify-between text-end items-end text-blue-950 font-bold mt-4'>
        <a href="#">Forgotten password? </a>
      </div>
      <Alert error={error} />
      <div className='flex justify-center mt-4'>
        <button
          type='submit'
          className='px-6 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-900 transition duration-300'
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
