import axios from 'axios';
import { FormEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginRoute } from '../../utils/APIRoutes';
import { AuthForm } from '../../components/auth-form';
import { AuthFormInput } from '../../components/auth-form/auth-form.styled';
import { toastOptions } from '../../utils/toast-options';
import { useAuth } from '../../hooks/use-auth';

export const Login = () => {
	const navigate = useNavigate();

	const usernameRef = useRef<HTMLInputElement | null>(null);
	const passwordRef = useRef<HTMLInputElement | null>(null);

	const handleValidation = () => {
		const username = usernameRef.current?.value;
		const password = passwordRef.current?.value;

		if (!username || username.length < 3) {
			toast.error('Username must be greater than 3 characters', toastOptions);
			return false;
		}

		if (!password || password.length < 8) {
			toast.error('Password must be greater than 8 characters', toastOptions);
			return false;
		}

		return true;
	};

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();

		if (handleValidation()) {
			const username = usernameRef.current?.value;
			const password = passwordRef.current?.value;

			const { data } = await axios.post(loginRoute, {
				username,
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

	useAuth();

	return (
		<AuthForm type='login' handleSubmit={handleSubmit}>
			<AuthFormInput
				type='text'
				placeholder='Username'
				name='username'
				ref={usernameRef}
				min='3'
			/>

			<AuthFormInput
				type='password'
				placeholder='Password'
				name='password'
				ref={passwordRef}
			/>
		</AuthForm>
	);
};
