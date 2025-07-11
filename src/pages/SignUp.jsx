import { useState, useEffect } from 'react';
import Name from '../components/Name';
import Email from '../components/Email';
import Tel from '../components/Tel';
import Gender from '../components/Gender';
import Country from '../components/Country';
import Password from '../components/Password';
import Terms from '../components/Terms';
import Alert from '../components/Alert';
import Button from '../components/Button';
import Agree from '../components/Agree';

const SignUp = ({activeTab}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  
  useEffect(() => {
    if (activeTab === 'signup') {
      setFirstName('');
      setLastName('');
      setEmail('');
      setTel('');
      setGender('');
      setCountry('');
      setPassword('');
      setIsChecked(false);
    }
  }, [activeTab]);
  function handleSubmit(e) {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const emailExists = existingUsers.some((user) => user.email === email);
    if (
      !firstName ||
      !lastName ||
      !email ||
      !tel ||
      !gender ||
      !country ||
      !password
    ) {
      setError('Please fill in all inputs');
      setTimeout(() => {
        setError('');
      }, 2000);
    } else if (password.length < 6) {
      setError('Password must be at least 6 characters');
      setTimeout(() => {
        setError('');
      }, 2000);
    } else if (emailExists) {
      setError('Email already registered. Please login.');
      setTimeout(() => setError(''), 2000);
    } else {
      setError('');
      const newUser = {
        firstName,
        lastName,
        email,
        tel,
        gender,
        country,
        password,
      };

      localStorage.setItem(
        'users',
        JSON.stringify([...existingUsers, newUser])
      );
      setTimeout(() => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setTel('');
        setGender('');
        setCountry('');
        setPassword('');
        setIsChecked(false);
      }, 500);
      setTimeout(() => {
        alert('Registration successful! proceed to Login');
      }, 1000);
    }
  }

  return (
    <>
      <form className='flex flex-col w-full  ' onSubmit={handleSubmit}>
        <Name
          firstName={firstName}
          lastName={lastName}
          setFirstName={setFirstName}
          setLastName={setLastName}
        />
        <Email email={email} setEmail={setEmail} />
        <Tel tel={tel} setTel={setTel} />
        <Gender gender={gender} setGender={setGender} />
        <Country country={country} setCountry={setCountry} />
        <Password password={password} setPassword={setPassword} />
        <Agree isChecked={isChecked} setIsChecked={setIsChecked} />
        <Alert error={error} />
        <Button isChecked={isChecked} />
      </form>
      <Terms />
    </>
  );
};

export default SignUp;
