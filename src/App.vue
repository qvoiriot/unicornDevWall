<template>
	<NavBar />
	<div class="layout gutter--xl">
		<div v-if="isLoading" class="row app-loader">
			<div class="flex lg12 xs12 md12 py-4">
				<va-progress-bar size="2rem" indeterminate />
			</div>
		</div>
		<router-view />
		<VideoModal />
		<CreateRessourceModal />
	</div>
</template>

<script>
	import NavBar from '@/components/NavBar';
	import VideoModal from '@/components/VideoModal';
	import CreateRessourceModal from '@/components/CreateRessourceModal';
	import ressourceService from '@/services/ressourceService';
	import { onMounted, ref } from '@vue/runtime-core';
	import { useStore } from 'vuex';

	export default {
		setup() {
			const store = useStore();

			const isLoading = ref(false);

			onMounted(async () => {
				isLoading.value = true;
				const ressources = await ressourceService.getRessources();
				store.dispatch('updateRessourcesAction', ressources);
				isLoading.value = false;
			});

			return { isLoading };
		},

		components: {
			NavBar,
			VideoModal,
			CreateRessourceModal,
		},
	};
</script>

<style>
	#app {
		font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
	}

	.title-site {
		font-size: 1.3em;
		text-transform: uppercase;
	}
</style>
