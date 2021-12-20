import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

import useForm from '../hooks/useForm';

import { CURRENT_USER_Q } from '../graphql/CURRENT_USER_Q';
import { LOG_IN_M } from '../graphql/AUTH_MTS';

export default function LogIn() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });

  const [login] = useMutation(LOG_IN_M, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_Q }],
  });

  const handleSubmit= async (e) => {
    e.preventDefault();

    const res = await login();
    console.log(res);
    resetForm();
  }
  
  return (
    <form method="POST" onSubmit={handleSubmit}>
      <h3>Log in</h3>

      <label htmlFor="email">
        Email
        <input
          onChange={handleChange}
          name="email"
          value={inputs.email}
        />
      </label>

      <label htmlFor="password">
        Password
        <input
          onChange={handleChange}
          value={inputs.password}
          type="password"
        />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}