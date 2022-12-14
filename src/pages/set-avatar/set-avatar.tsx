import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Loader, SubmitBtn } from '../../components/common';
import { setAvatarRoute } from '../../utils/APIRoutes';
import { loadAvatars } from '../../utils/load-avatars';
import { getUser, setUser } from '../../utils/local-storage';
import { toastOptions } from '../../utils/toast-options';
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
	const [selectedAvatar, setSelectedAvatar] = useState(0);

	const setProfilePicture = async () => {
		const user = getUser();
		const avatar = avatars[selectedAvatar];

		const { data } = await axios.post(`${setAvatarRoute}/${user?._id}`, {
			avatar,
		});

		console.log(data);

		if (data.avatar && user) {
			user.avatar = data.avatar;
			setUser(user);
			navigate('/');
		} else {
			toast.error('Error setting avatar. Please try again later', toastOptions);
		}
	};

	useEffect(() => {
		if (getUser()) {
			navigate('/');
		}
	}, [navigate]);

	useEffect(() => {
		setIsLoading(true);

		loadAvatars(4)
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
			{isLoading ? (
				<Loader />
			) : (
				<Container>
					<Title>Pick an avatar as your profile picture</Title>

					<Avatars>
						{avatars.map((avatar, index) => (
							<AvatarWrapper
								onClick={() => setSelectedAvatar(index)}
								selected={selectedAvatar === index}
							>
								<Avatar
									key={avatar}
									src={`data:image/svg+xml;base64,${avatar}`}
									alt=''
								/>
							</AvatarWrapper>
						))}
					</Avatars>

					<SubmitBtn onClick={setProfilePicture}>
						Set As Profile Picture
					</SubmitBtn>
				</Container>
			)}
		</>
	);
};
