const Country = ({ country, setCountry }) => {
  return (
    <select
      className='bg-black/30 rounded-md p-2 text-white mt-3 '
      value={country}
      onChange={(e) => setCountry(e.target.value)}
    >
      <option value=''>Select Country</option>
      <option className='bg-black/40' value='USA'>
        USA
      </option>
      <option value='Canada'>Canada</option>
      <option className='bg-black/40' value='UK'>
        UK
      </option>
      <option value='Australia'>Australia</option>
    </select>
  );
};

export default Country;
