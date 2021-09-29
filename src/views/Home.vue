<template>
	<va-card v-if="bookmarks.length">
		<va-card-title class="display-4">Mes BookMarks</va-card-title>
		<va-card-content>
			<transition-group name="bookmark" tag="div" class="row">
				<div
					class="flex xs12 md4 lg3 pa-3"
					v-for="ressource in bookmarks"
					:key="ressource.id"
				>
					<RessourceItem
						@remove-from-bookmark="bookmarkRessourceRemove($event)"
						:ressource="ressource"
						isBookMark
					/>
				</div>
			</transition-group>
		</va-card-content>
	</va-card>
	<div class="row">
		<div
			class="flex xs12 md4 lg3 pa-3"
			v-for="ressource in ressources"
			:key="ressource.id"
		>
			<RessourceItem
				@add-to-bookmark="bookmarkRessourceAdd($event)"
				:ressource="ressource"
			/>
		</div>
	</div>
</template>

<script>
	import { computed, ref } from '@vue/reactivity';
	import RessourceItem from '@/components/RessourceItem';
	import { useStore } from 'vuex';

	export default {
		name: 'Home',
		components: { RessourceItem },
		setup() {
			const store = useStore();
			const bookmarks = ref([]);

			const ressources = computed(() => store.getters['validRessources']);

			const bookmarkRessourceAdd = (ressource) => {
				if (!bookmarks.value.includes(ressource))
					bookmarks.value.push(ressource);
			};
			const bookmarkRessourceRemove = (ressourceToDelete) => {
				const pos = bookmarks.value.indexOf(ressourceToDelete);
				bookmarks.value.splice(pos, 1);
			};

			return {
				ressources,
				bookmarks,
				bookmarkRessourceAdd,
				bookmarkRessourceRemove,
			};
		},
	};
</script>

<style scoped>
	.bookmark-enter-from {
		opacity: 0;
	}
	.bookmark-enter-active,
	.bookmark-leave-active {
		transition: all 0.5s ease-out;
	}
	.bookmark-leave-to {
		opacity: 0;
	}
</style>
