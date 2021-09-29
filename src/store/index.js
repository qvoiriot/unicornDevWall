import { createStore } from 'vuex';
import ressources from '@/store/modules/ressources';
import auth from '@/store/modules/auth';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		ressources,
		auth,
	},
	plugins: [createPersistedState()],
});
