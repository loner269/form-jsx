const Button = ({ isChecked }) => {
  return (
    <>
      <button
        type='submit'
        className={`mt-4  px-4 py-2 text-white rounded ${
          isChecked
            ? 'bg-blue-600 font-semibold cursor-pointer hover:bg-blue-700'
            : 'bg-gray-400 cursor-not-allowed'
        }`}
        disabled={!isChecked}
      >
        SIGN UP
      </button>
    </>
  );
};

export default Button;
