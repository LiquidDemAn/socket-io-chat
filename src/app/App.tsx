import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Chat } from '../pages/chat';
import { Login } from '../pages/login';
import { Register } from '../pages/register';
import { AppContainer } from './App.styled';
import { SetAvatar } from '../pages/set-avatar';

function App() {
	return (
		<BrowserRouter>
			<AppContainer>
				<Routes>
					<Route path='/' element={<Chat />} />
					<Route path='set-avatar' element={<SetAvatar />} />
					<Route path='register' element={<Register />} />
					<Route path='login' element={<Login />} />
				</Routes>
			</AppContainer>
		</BrowserRouter>
	);
}

export default App;
