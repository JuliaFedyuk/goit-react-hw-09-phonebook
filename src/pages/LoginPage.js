import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import '../styles/pages.scss';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`This type of name - ${name} doesn't work out`);
    }
  };
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(authOperations.logIn({ email, password }));

      setEmail('');
      setPassword('');
    },
    [email, password, dispatch],
  );

  return (
    <div className="loginWrapper">
      <h1 className="page-title">Login Page</h1>

      <form className="loginForm" onSubmit={handleSubmit} autoComplete="off">
        <label className="input_label">
          Mail
          <input
            className="form_input"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className="input_label">
          Password
          <input
            className="form_input"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className="button" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}
