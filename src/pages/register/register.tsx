import React, { ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
	Form,
	FormAdd,
	FormButton,
	FormContainer,
	FormInput,
	LogoImg,
	LogoText,
	LogoWrapper,
} from '../chat/chat.styled';
import Logo from '../../assets/logo.svg';

export const Register = () => {
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		alert('form');
	};

	const handleChange = (event: ChangeEvent) => {};

	return (
		<FormContainer>
			<Form onSubmit={handleSubmit}>
				<LogoWrapper>
					<LogoImg />
					<LogoText>snappy</LogoText>
				</LogoWrapper>
				<FormInput
					type='text'
					placeholder='Username'
					name='username'
					onChange={handleChange}
				/>
				<FormInput
					type='email'
					placeholder='Email'
					name='email'
					onChange={handleChange}
				/>
				<FormInput
					type='password'
					placeholder='Password'
					name='password'
					onChange={handleChange}
				/>
				<FormInput
					type='password'
					placeholder='Confirm Password'
					name='confirmPassword'
					onChange={handleChange}
				/>
				<FormButton type='submit'>Create User</FormButton>
				<FormAdd>
					already have an account? <Link to='/login'>Login</Link>
				</FormAdd>
			</Form>
		</FormContainer>
	);
};
