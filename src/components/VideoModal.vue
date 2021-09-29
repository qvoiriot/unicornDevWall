<template>
	<div>
		<va-modal v-model="isOpen" hide-default-actions>
			<template #header>
				<h2 class="display-2 mb-3">{{ ressource.title }}</h2>
			</template>

			<div>
				<iframe
					width="560"
					height="315"
					:src="YtUrl"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>

			<template #footer>
				<va-button icon="close" @click="isOpen = false"></va-button>
			</template>
		</va-modal>
	</div>
</template>

<script>
	import { computed, ref } from '@vue/reactivity';
	import eventBus from '@/plugins/eventBus';

	export default {
		setup() {
			const isOpen = ref(false);
			const ressource = ref();
			const YtUrl = computed(() =>
				ressource.value.url.replace('watch?v=', '/embed/')
			);

			eventBus.on('open-video', (ressourceToPlay) => {
				ressource.value = ressourceToPlay;
				isOpen.value = true;
			});

			return {
				isOpen,
				ressource,
				YtUrl,
			};
		},
	};
</script>

<style lang="scss" scoped></style>
