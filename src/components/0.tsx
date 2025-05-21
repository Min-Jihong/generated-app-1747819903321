import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// Assuming a Button and Input component are defined elsewhere following the design guidelines.
import Button from './Button';
import Input from './Input';

interface LoginFormFields {
  username: string;
  password: string;
}

export const LoginPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormFields>();
  const onSubmit = (data: LoginFormFields) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Input label='Username' {...register('username', { required: true })} error={errors.username && 'Username is required.'} />
      <Input label='Password' type='password' {...register('password', { required: true })} error={errors.password && 'Password is required.'} />
      <Button type='submit' variant='primary'>Log in</Button>
    </form>
  );
};