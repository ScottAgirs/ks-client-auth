import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

import { SIGN_UP_M } from '../graphql/AUTH_MTS';

import useForm from '../hooks/useForm';

export default function SignUp() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    name: '',
    password: '',
  });
  
  const [signup] = useMutation(SIGN_UP_M, {
    variables: inputs,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
    const res = await signup().catch(console.error);
    console.log(res);

    resetForm();
  }
  return (
    <form method="POST" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label htmlFor="email">
        Your Name
        <input
          onChange={handleChange}
          name="name"
          value={inputs.name}
        />
      </label>

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
          name="password"
          value={inputs.password}
          type="password"
        />
      </label>

      <button type="submit">Sign up</button>
    </form>
  );
}