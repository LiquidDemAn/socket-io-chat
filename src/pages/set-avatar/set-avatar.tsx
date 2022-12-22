import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Avatar, Loader, SubmitBtn } from '../../components/common';
import { useAuth } from '../../hooks/use-auth';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { loadAvatars } from '../../utils/load-avatars';
import { getUser, getUserError } from '../../redux/services/user/selectors';
import { toastOptions } from '../../utils/toast-options';
import {
	Avatars,
	Container,
	Title,
	// Avatar,
	AvatarWrapper,
} from './set-avatar.styled';
import { setAvatarAction } from '../../redux/services/user/actions';
import { useNavigate } from 'react-router-dom';

export const SetAvatar = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const user = useAppSelector(getUser);
	const error = useAppSelector(getUserError);

	if (error) {
		toast.error(error.message, toastOptions);
	}

	const [avatars, setAvatars] = useState<string[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [selectedAvatar, setSelectedAvatar] = useState(0);

	const setProfilePicture = async () => {
		const avatar = avatars[selectedAvatar];
		const id = user?._id;

		if (id) {
			dispatch(setAvatarAction({ avatar, id }));
		}
	};

	useAuth();

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

	useEffect(() => {
		if (user?.avatar) {
			navigate('/');
		}
	}, [user?.avatar, navigate]);

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
									url={avatar}
									// src={`data:image/svg+xml;base64,${avatar}`}
									// alt=''
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
