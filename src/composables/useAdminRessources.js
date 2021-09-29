import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
import ressourceService from '@/services/ressourceService';
export default function useAdminRessources() {
	const store = useStore();
	const accessToken = store.state.auth.credentials.accessToken;
	const validatedRessources = computed(
		() => store.getters['validRessources']
	);

	const deleteRessourceAction = async (ressource) => {
		const res = await ressourceService.deleteRessource(
			ressource,
			accessToken
		);
		if (res) store.dispatch('deleteRessourceAction', ressource);
	};

	const unvalidatedRessources = computed(
		() => store.getters['unValidRessources']
	);

	const validateRessourceAction = async (unvalidatedRessources) => {
		const ressourceValidated = { ...unvalidatedRessources };
		ressourceValidated.isValid = true;
		const res = await ressourceService.validateRessource(
			ressourceValidated,
			accessToken
		);
		if (res)
			store.dispatch(
				'validateRessourceAction',
				ressourceValidated,
				accessToken
			);
	};
	return {
		deleteRessourceAction,
		validatedRessources,
		unvalidatedRessources,
		validateRessourceAction,
	};
}
