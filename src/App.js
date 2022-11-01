import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from './redux/actions/userActions';

import './App.css';
import Example from './screens/Example/Example';

function App() {
  const [email, setEmail] = useState('test71@test.com');

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const onRegisterClick = () => {
    const body = {
      email: email,
      password: '123',
      confirm_password: '123',
      first_name: 'hama',
      last_name: 'barzan',
      gender: 'M',
    };

    dispatch(registerUser(body));
  };

  const onChangeEmail = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  return (
    <div className='App'>
      <button onClick={onRegisterClick} />
      <input type={'text'} onChange={onChangeEmail} />
      <Example />
    </div>
  );
}

export default App;
