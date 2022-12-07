import { FormEvent, useRef } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
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
import { registerRoute } from '../../utils/APIRoutes';

export const Register = () => {
	const navigate = useNavigate();

	const usernameRef = useRef<HTMLInputElement | null>(null);
	const emailRef = useRef<HTMLInputElement | null>(null);
	const passwordRef = useRef<HTMLInputElement | null>(null);
	const confirmPasswordRef = useRef<HTMLInputElement | null>(null);

	const toastOptions: ToastOptions = {
		position: 'bottom-right',
		autoClose: 8000,
		pauseOnHover: true,
		theme: 'dark',
	};

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

		if (username && username.length < 3) {
			toast.error('Username must be greater than 3 characters', toastOptions);
			return false;
		}

		if (password && password.length < 8) {
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
		<>
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
						ref={usernameRef}
					/>
					<FormInput
						type='email'
						placeholder='Email'
						name='email'
						ref={emailRef}
					/>
					<FormInput
						type='password'
						placeholder='Password'
						name='password'
						ref={passwordRef}
					/>
					<FormInput
						type='password'
						placeholder='Confirm Password'
						name='confirmPassword'
						ref={confirmPasswordRef}
					/>
					<FormButton type='submit'>Create User</FormButton>
					<FormAdd>
						already have an account? <Link to='/login'>Login</Link>
					</FormAdd>
				</Form>
			</FormContainer>
			<ToastContainer />
		</>
	);
};
