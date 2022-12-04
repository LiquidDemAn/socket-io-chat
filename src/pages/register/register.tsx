import { ChangeEvent, FormEvent, useRef } from 'react';
import { Link } from 'react-router-dom';
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

export const Register = () => {
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

	const handleChange = (event: ChangeEvent) => {};

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

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		handleValidation();
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
						onChange={handleChange}
						ref={usernameRef}
					/>
					<FormInput
						type='email'
						placeholder='Email'
						name='email'
						onChange={handleChange}
						ref={emailRef}
					/>
					<FormInput
						type='password'
						placeholder='Password'
						name='password'
						onChange={handleChange}
						ref={passwordRef}
					/>
					<FormInput
						type='password'
						placeholder='Confirm Password'
						name='confirmPassword'
						onChange={handleChange}
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
