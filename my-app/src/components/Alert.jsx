const Alert = ({ error }) =>
  error ? (
    <p className='text-red-500 mt-3 text-center'>{error}</p>
  ) : null;

export default Alert;
