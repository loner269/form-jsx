import React from 'react';
import Form from './pages/Form';
import bgVideo from './assets/bg.mp4';
const App = () => {
  return (
    <div className='h-screen relative overflow-hidden flex justify-center items-center'>
      <video src={bgVideo} autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover"></video>
      <Form />
    </div>
  );
};

export default App;
