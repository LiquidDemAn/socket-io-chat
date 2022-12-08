import axios from 'axios';
import { FormEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerRoute } from '../../utils/APIRoutes';
import { AuthForm } from '../../components/auth-form';
import { AuthFormInput } from '../../components/auth-form/auth-form.styled';
import { toastOptions } from '../../utils/toast-options';

export const Register = () => {
	const navigate = useNavigate();

	const usernameRef = useRef<HTMLInputElement | null>(null);
	const emailRef = useRef<HTMLInputElement | null>(null);
	const passwordRef = useRef<HTMLInputElement | null>(null);
	const confirmPasswordRef = useRef<HTMLInputElement | null>(null);

	const handleValidation = () => {
		const username = usernameRef.current?.value;
		const email = emailRef.current?.value;
		const password = passwordRef.current?.value;
		const confirmPassword = confirmPasswordRef.current?.value;

		if (password !== confirmPassword) {
			toast.error(
				'Password and confirm password must be the same',
				toastOptions
			);
			return false;
		}

		if (!username || username.length < 3) {
			toast.error('Username must be greater than 3 characters', toastOptions);
			return false;
		}

		if (!password || password.length < 8) {
			toast.error('Password must be greater than 8 characters', toastOptions);
			return false;
		}

		if (!email) {
			toast.error('Email is required', toastOptions);
			return false;
		}

		return true;
	};

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();

		if (handleValidation()) {
			const username = usernameRef.current?.value;
			const email = emailRef.current?.value;
			const password = passwordRef.current?.value;

			const { data } = await axios.post(registerRoute, {
				username,
				email,
				password,
			});

			if (data.status) {
				localStorage.setItem('caht-app-user', JSON.stringify(data.user));
				navigate('/');
			} else {
				toast.error(data.msg, toastOptions);
			}
		}
	};

	return (
		<AuthForm type='register' handleSubmit={handleSubmit}>
			<AuthFormInput
				type='text'
				placeholder='Username'
				name='username'
				ref={usernameRef}
			/>
			<AuthFormInput
				type='email'
				placeholder='Email'
				name='email'
				ref={emailRef}
			/>
			<AuthFormInput
				type='password'
				placeholder='Password'
				name='password'
				ref={passwordRef}
			/>
			<AuthFormInput
				type='password'
				placeholder='Confirm Password'
				name='confirmPassword'
				ref={confirmPasswordRef}
			/>
		</AuthForm>
	);
};
