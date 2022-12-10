import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loader from '../../assets/loader.gif';
import { setAvatar } from '../../utils/APIRoutes';
import { loadAvatars } from '../../utils/load-avatars';
import { Avatars, Container, Title, Avatar } from './set-avatar.styled';

const multiavatarAPI = 'https://api.multiavatar.com/456789';

export const SetAvatar = () => {
	const navigate = useNavigate();

	const [avatars, setAvatars] = useState<string[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null);

	console.log(avatars);

	useEffect(() => {
		setIsLoading(true);

		loadAvatars(1)
			.then((data) => {
				setAvatars(data);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setIsLoading(false);
			});
	}, []);

	return (
		<>
			<Container>
				<Title>SetAvatar</Title>

				<Avatars>
					{avatars.map((avatar, index) => (
						<Avatar></Avatar>
					))}
				</Avatars>
			</Container>
		</>
	);
};
