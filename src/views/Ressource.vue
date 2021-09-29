<template>
	<div v-if="ressource">
		<h1 class="display-4">{{ ressource.title }}</h1>
		<div class="row">
			<div class="flex lg4 xs12 md4 pt-3">
				<va-image
					:src="ressource.image || require('@/assets/default.png')"
				/>
			</div>
			<div class="flex lg8 xs12 md8">
				<va-rating v-model="ressource.rating"></va-rating>
				<p class="pt-3">{{ ressource.description }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import { onMounted } from '@vue/runtime-core';
	import ressourceService from '@/services/ressourceService';
	import { ref } from '@vue/reactivity';
	import { useRoute } from 'vue-router';
	export default {
		setup() {
			const ressourceId = useRoute().params.id;
			const ressource = ref();

			onMounted(async () => {
				ressource.value = await ressourceService.getRessourceById(
					ressourceId
				);
			});

			return { ressourceId, ressource };
		},
	};
</script>

<style lang="scss" scoped></style>
