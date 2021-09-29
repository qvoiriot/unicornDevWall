export default {
	state: {
		ressources: [],
	},
	getters: {
		validRessources: (state) => {
			return state.ressources.filter((ressource) => ressource.isValid);
		},
		unValidRessources: (state) => {
			return state.ressources.filter((ressource) => !ressource.isValid);
		},
	},
	mutations: {
		updateRessources(state, ressources) {
			state.ressources = ressources;
		},
		deleteRessource(state, ressourceToDelete) {
			state.ressources = state.ressources.filter(
				(ressource) => ressource.id !== ressourceToDelete.id
			);
		},
		addRessource(state, ressourceToAdd) {
			state.ressources.unshift(ressourceToAdd);
		},
		validateRessource(state, ressourceToValidate) {
			const index = state.ressources.findIndex(
				(ressource) => ressource.id === ressourceToValidate.id
			);
			state.ressources[index] = ressourceToValidate;
		},
	},
	actions: {
		updateRessourcesAction({ commit }, ressources) {
			commit('updateRessources', ressources);
		},
		deleteRessourceAction({ commit }, ressource) {
			commit('deleteRessource', ressource);
		},
		addRessourceAction({ commit }, ressource) {
			commit('addRessource', ressource);
		},
		validateRessourceAction({ commit }, ressource) {
			commit('validateRessource', ressource);
		},
	},
};
