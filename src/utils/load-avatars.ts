import axios from 'axios';
import { Buffer } from 'buffer';

type ImageType = {
	data: string;
	status: number;
	statusText: string;
};

export const loadAvatars = async (count: number) => {
	const data: string[] = [];
	const api = 'https://api.multiavatar.com/456789';

	try {
		for (let i = 0; i < count; i++) {
			const randomNumber = Math.round(Math.random() * 1000);
			const image: ImageType = await axios.get(`${api}/${randomNumber}`);
			const buffer = new Buffer(image.data);
			data.push(buffer.toString('base64'));
		}

		return data;
	} catch (error) {
		throw error;
	}
};
