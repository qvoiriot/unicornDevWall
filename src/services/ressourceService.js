import axios from 'axios';

export default {
	async getRessources() {
		let res;
		try {
			res = await axios.get(
				process.env.VUE_APP_SERVER_URL +
					'/ressources?_sort=date&_order=desc'
			);
		} catch (error) {
			alert('error sur le serveur');
		}
		return res.data;
	},
	async getRessourceById(id) {
		let res;
		try {
			res = await axios.get(
				process.env.VUE_APP_SERVER_URL + '/ressources/' + id
			);
		} catch (error) {
			alert('error sur le serveur');
		}
		return res.data;
	},
	async addRessources(ressource) {
		let res;
		try {
			res = await axios.post(
				process.env.VUE_APP_SERVER_URL + '/ressources',
				ressource
			);
		} catch (error) {
			alert('error sur le serveur');
		}
		return res.data;
	},
	async deleteRessource(ressource, accessToken) {
		let res;
		const headers = {
			headers: {
				Authorization: 'Bearer ' + accessToken + '',
			},
		};
		try {
			res = await axios.delete(
				`${process.env.VUE_APP_SERVER_URL_PROTECTED}/ressources/${ressource.id}`,
				headers
			);
		} catch (error) {
			alert('error sur le serveur');
		}
		return res.data;
	},
	async validateRessource(ressourceToValidate, accessToken) {
		let res;
		const headers = {
			headers: {
				Authorization: 'Bearer ' + accessToken + '',
			},
		};
		try {
			res = await axios.put(
				`${process.env.VUE_APP_SERVER_URL_PROTECTED}/ressources/${ressourceToValidate.id}`,
				ressourceToValidate,
				headers
			);
		} catch (error) {
			alert('error sur le serveur');
		}
		return res.data;
	},
};
