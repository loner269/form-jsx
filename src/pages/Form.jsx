import { useState } from 'react';
import SignUpForm from './SignUp';
import LoginForm from './Login';

const Form = () => {
  const [activeTab, setActiveTab] = useState('signup');

  return (
    <div className='flex flex-col   z-10 justify-center w-[min(400px,90%)] p-8 rounded-lg  shadow-md backdrop-blur-sm bg-white/20'>
      <div className='relative mb-6 p-2 bg-black/40 max-w-3/5 rounded-full flex overflow-hidden'>
        <div
          className={`absolute  top-2 w-1/2 bottom-2 bg-blue-950 rounded-full transition-all duration-3000 z-0 ${
            activeTab === 'login' ? 'translate-x-6/7' : ' translate-x-0'
          }`}
        ></div>
        <button
          onClick={() => setActiveTab('signup')}
          className={`relative z-10 w-1/2  py-2 font-semibold transition-colors duration-3000 ${
            activeTab === 'signup' ? 'text-white' : 'text-black font-bold'
          }`}
        >
          Sign Up
        </button>
        <button
          onClick={() => setActiveTab('login')}
          className={`relative z-10 w-1/2 py-2 font-semibold transition-colors duration-3000 ${
            activeTab === 'login' ? 'text-white' : 'text-black font-bold'
          }`}
        >
          Login
        </button>
      </div>

      <div className=' relative overflow-hidden'>
        <div
          className={`w-[100%] transition-all 
          ${
            activeTab === 'signup'
              ? 'scale-100 duration-3000 '
              : 'scale-0 duration-2000'
          }`}
        >
          <SignUpForm activeTab={activeTab} />
        </div>

        <div
          className={`w-[100%] transition-all  absolute top-[20%]
          ${
            activeTab === 'login'
              ? 'scale-100 duration-3000'
              : 'scale-0 duration-2000'
          }`}
        >
          <LoginForm activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default Form;
