const Gender = ({ gender, setGender }) => {
  return (
    <div className='mt-3'>
      <label className='mr-3 font-bold'>
        <input
          className='mr-1'
          type='radio'
          name='gender'
          id='male'
          value='male'
          checked={gender === 'male'}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>
      <label className='font-bold'>
        <input
          className='mr-1'
          type='radio'
          name='gender'
          id='female'
          value='female'
          checked={gender === 'female'}
          onChange={(e) => setGender(e.target.value)}
        />
        female
      </label>
    </div>
  );
};

export default Gender;
