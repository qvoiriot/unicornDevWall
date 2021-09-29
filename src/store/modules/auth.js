export default {
	state: {
		credentials: {},
	},
	mutations: {
		updateCredentials(state, payload) {
			state.credentials = payload;
		},
	},
	actions: {
		updateCredentialsAction({ commit }, payload) {
			commit('updateCredentials', payload);
		},
	},
};
