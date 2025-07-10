const Name = ({ firstName, setFirstName, lastName, setLastName }) => {
  return (
    <div className='flex gap-3'>
      
      <div className='bg-black/30 rounded-md p-2 text-white w-full flex items-center'>
        <i className='fa-solid fa-user pr-2'></i>
        <input
          className='w-full focus:outline-none'
          type='text'
          placeholder='First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className='bg-black/30 rounded-md p-2 text-white w-full flex items-center'>
        <i className='fa-solid fa-user pr-2'></i>
        <input
          className='w-full focus:outline-none'
          type='text'
          placeholder='Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Name;
