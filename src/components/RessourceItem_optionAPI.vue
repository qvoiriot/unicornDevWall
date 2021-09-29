<template>
	<va-card>
		<va-image
			:src="ressource.image || require('@/assets/default.png')"
			style="height: 200px;"
		/>
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
		computed: {
			dateInFrench() {
				return new Date(this.ressource.date).toLocaleDateString();
			},
			mediaInFrench() {
				switch (this.ressource.media) {
					case 'video':
						return 'Vidéo';
					case 'book':
						return 'Livre';
					case 'post':
						return 'Article';
					default:
						return 'Ressource';
				}
			},
		},
		methods: {
			addToBookMarks(ressource) {
				this.$emit('add-to-bookmark', ressource);
			},
			removeFromBookMarks(ressource) {
				this.$emit('remove-from-bookmark', ressource);
			},
			playVideoAction(ressource) {
				eventBus.emit('open-video', ressource);
			},
		},
		setup() {
			return {};
		},
	};
</script>
