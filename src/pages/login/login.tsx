import { FormEvent, useRef } from 'react';
import { toast } from 'react-toastify';
import { AuthForm } from '../../components/auth-form';
import { AuthFormInput } from '../../components/auth-form/auth-form.styled';
import { toastOptions } from '../../utils/toast-options';
import { useAuth } from '../../hooks/use-auth';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { loginAction } from '../../redux/services/user/actions';
import { getUserError } from '../../redux/services/user/selectors';

export const Login = () => {
	const dispatch = useAppDispatch();
	const error = useAppSelector(getUserError);

	const usernameRef = useRef<HTMLInputElement | null>(null);
	const passwordRef = useRef<HTMLInputElement | null>(null);

	if (error) {
		toast.error(error.msg, toastOptions);
	}

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

			if (username && password) {
				dispatch(loginAction({ username, password }));
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
