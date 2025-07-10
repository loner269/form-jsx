const Password = ({ password, setPassword }) => {
  return (
    <div className='bg-black/30 rounded-md p-2 text-white mt-3 mb-3 pl-3 flex items-center'>
      <i className='fa-solid fa-lock pr-4'></i>
      <input
        className='w-full focus:outline-none'
        type='password'
        placeholder='Set Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
};

export default Password;
