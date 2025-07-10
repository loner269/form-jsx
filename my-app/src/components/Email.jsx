const Email = ({ email, setEmail }) => {
  return (
    <div className='bg-black/30 rounded-md p-2 text-white mt-3 pl-3 flex items-center '>
      <i className='fa-solid fa-envelope pr-4'></i>
      <input
        className='w-full focus:outline-none'
        type='email'
        placeholder='Enter Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
};

export default Email;
