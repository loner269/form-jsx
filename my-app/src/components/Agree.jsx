const Agree = ({ isChecked, setIsChecked }) => {
  return (
    <div>
      <input
        type='checkbox'
        id='terms'
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label htmlFor='terms'> I agree to the terms and conditions</label>
    </div>
  );
};

export default Agree;
