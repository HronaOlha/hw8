import { Button, Input, Form, Label } from './Login.styled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operation';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // toast.success('Registration was successful');
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        {' '}
        Email
        <Input
          type="email"
          name="email"
          //   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
      </Label>
      <Label>
        {' '}
        Password
        <Input
          type="password"
          name="password"
          //   pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          //   title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
          required
        />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};

export default Login;
