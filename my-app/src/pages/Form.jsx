import { useState } from 'react';
import SignUpForm from './SignUp';
import LoginForm from './Login';

const Form = () => {
  const [activeTab, setActiveTab] = useState('signup');

  return (
    <div className='flex flex-col  z-10 justify-center p-8 rounded-lg  shadow-md backdrop-blur-sm bg-white/20'
    >
      <div className='relative mb-6 p-2 bg-black/30 max-w-3/5 rounded-full flex overflow-hidden'>
        <div
          className={`absolute  h-3/4 w-6/13 bg-black/60 rounded-full transition-transform duration-500 ease-in-out z-0 ${
            activeTab === 'login' ? 'translate-x-full' : 'translate-x-0'
          }`}
        ></div>
        <button
          onClick={() => setActiveTab('signup')}
          className={`relative z-10 w-1/2  py-2 font-semibold transition-colors duration-300 ${
            activeTab === 'signup' ? 'text-white' : 'text-black font-bold'
          }`}
        >
          Sign Up
        </button>
        <button
          onClick={() => setActiveTab('login')}
          className={`relative z-10 w-1/2 py-2 font-semibold transition-colors duration-300 ${
            activeTab === 'login' ? 'text-white' : 'text-black font-bold'
          }`}
        >
          Login
        </button>
      </div>

      <div className={`relative  max-w-[400px] overflow-hidden ${
        activeTab === 'signup' ? '' : 'max-h-[250px] '
      }`}>
        <div
          className={`w-[200%] flex transition-transform duration-500 ease-in-out ${
            activeTab === 'signup' ? 'translate-x-0' : '-translate-x-1/2'
          }`}
        >
          <div className='w-1/2 px-2'>
            <SignUpForm />
          </div>

          <div className='w-1/2 px-2'>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
