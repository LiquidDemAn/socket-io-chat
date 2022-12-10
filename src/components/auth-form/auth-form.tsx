import { FormEvent, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {
	AuthFormWrapper,
	LogoWrapper,
	LogoImg,
	LogoText,
	AuthFormButton,
	AuthFormAdd,
} from './auth-form.styled';

type Props = {
	type: 'register' | 'login';
	children: ReactElement | ReactElement[];
	handleSubmit: (event: FormEvent) => Promise<void>;
};

export const AuthForm = ({ type, children, handleSubmit }: Props) => {
	return (
		<>
			<AuthFormWrapper onSubmit={handleSubmit}>
				<LogoWrapper>
					<LogoImg />
					<LogoText>snappy</LogoText>
				</LogoWrapper>

				{children}

				<AuthFormButton type='submit'>
					{type === 'register' ? 'Create User' : 'Login'}
				</AuthFormButton>

				{type === 'register' ? (
					<AuthFormAdd>
						already have an account? <Link to='/login'>Login</Link>
					</AuthFormAdd>
				) : (
					<AuthFormAdd>
						Don't have an account? <Link to='/register'>Register</Link>
					</AuthFormAdd>
				)}
			</AuthFormWrapper>
			{/* <ToastContainer /> */}
		</>
	);
};
