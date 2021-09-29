import axios from 'axios';

export default {
	async signIn(email, password) {
		let res;
		const credentials = {
			email,
			password,
		};
		try {
			const result = await axios.post(
				process.env.VUE_APP_SERVER_URL + '/signin',
				credentials
			);
			res = result.data;
		} catch (error) {
			console.log('Signin Request Error', error);
		}
		return res;
	},
};
