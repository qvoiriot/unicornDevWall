<template>
	<va-card>
		<router-link :to="{ name: 'Ressource', params: { id: ressource.id } }">
			<va-image
				:src="ressource.image || require('@/assets/default.png')"
				style="height: 200px;"
			/>
		</router-link>
		<div class="ml-3" v-if="ressource.isTop">
			<va-icon class="material-icons">star</va-icon> Top ressource
		</div>
		<va-card-title>{{ ressource.title }}</va-card-title>
		<va-card-content
			>{{ mediaInFrench }} ajouté le {{ dateInFrench }}</va-card-content
		>
		<va-button
			v-if="!isBookMark"
			class="ml-3 mb-3"
			icon="bookmark_add"
			@click="addToBookMarks(ressource)"
		/>
		<va-button
			v-if="isBookMark"
			class="ml-3 mb-3"
			icon="bookmark_remove"
			@click="removeFromBookMarks(ressource)"
		/>
		<va-button
			v-if="ressource.media === 'video'"
			class="ml-3 mb-3"
			icon="play_circle"
			@click="playVideoAction(ressource)"
		/>
	</va-card>
</template>

<script>
	import { computed } from '@vue/reactivity';
	import eventBus from '@/plugins/eventBus';

	export default {
		props: {
			ressource: {
				type: Object,
				default: null,
			},
			isBookMark: {
				type: Boolean,
				default: false,
			},
		},

		setup(props, context) {
			const dateInFrench = computed(() =>
				new Date(props.ressource.date).toLocaleDateString()
			);

			const mediaInFrench = computed(() => {
				switch (props.ressource.media) {
					case 'video':
						return 'Vidéo';
					case 'book':
						return 'Livre';
					case 'post':
						return 'Article';
					default:
						return 'Ressource';
				}
			});

			const addToBookMarks = (ressource) =>
				context.emit('add-to-bookmark', ressource);

			const removeFromBookMarks = (ressource) =>
				context.emit('remove-from-bookmark', ressource);

			const playVideoAction = (ressource) =>
				eventBus.emit('open-video', ressource);

			return {
				dateInFrench,
				mediaInFrench,
				addToBookMarks,
				removeFromBookMarks,
				playVideoAction,
			};
		},
	};
</script>

<style lang="scss" scoped></style>
