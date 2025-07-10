const Tel = ({ tel, setTel }) => {
  return (
    <div className='bg-black/30 rounded-md p-2 text-white mt-3 pl-3 flex items-center'>
      <i className='fa-solid fa-phone pr-4'></i>
      <input
        className='w-full focus:outline-none'
        type='tel'
        placeholder='Enter Phone No.'
        value={tel}
        onChange={(e) => setTel(e.target.value)}
      />
    </div>
  );
};

export default Tel;
