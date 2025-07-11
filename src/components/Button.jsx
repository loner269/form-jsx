const Button = ({ isChecked }) => {
  return (
    <>
      <button
        type='submit'
        className={`mt-4  px-4 py-2 text-white rounded ${
          isChecked
            ? 'bg-blue-800 scale-[90%] font-semibold cursor-pointer hover:scale-[100%] hover:bg-blue-700 transition-all duration-1000'
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
