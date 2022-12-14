import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loader from '../../assets/loader.gif';
import { SubmitBtn } from '../../components/common';
import { setAvatar } from '../../utils/APIRoutes';
import { loadAvatars } from '../../utils/load-avatars';
import {
	Avatars,
	Container,
	Title,
	Avatar,
	AvatarWrapper,
} from './set-avatar.styled';

export const SetAvatar = () => {
	const navigate = useNavigate();

	const [avatars, setAvatars] = useState<string[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [selectedAvatar, setSelectedAvatar] = useState<number | null>(0);

	console.log(avatars);

	useEffect(() => {
		setIsLoading(true);

		loadAvatars(2)
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
				<Title>Pick an avatar as your profile picture</Title>

				<Avatars>
					{avatars.map((avatar, index) => (
						<AvatarWrapper
							onClick={() => setSelectedAvatar(index)}
							selected={selectedAvatar === index}
						>
							<Avatar key={avatar} src={avatar} alt='' />
						</AvatarWrapper>
					))}
				</Avatars>

				<SubmitBtn>Set As Profile Picture</SubmitBtn>
			</Container>
		</>
	);
};
