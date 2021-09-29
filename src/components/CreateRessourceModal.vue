<template>
	<div>
		<va-modal v-model="isOpen" hide-default-actions>
			<template #header>
				<h2 class="display-2 mb-3">Nouvelle ressource</h2>
			</template>

			<div>
				<va-form color="black">
					<va-input
						class=""
						label="Titre"
						v-model="ressourceForm.title"
						bordered
					/>
					<va-input
						class="my-4"
						label="URL"
						v-model="ressourceForm.url"
						bordered
					/>
					<va-input
						class="my-4"
						label="Image URL"
						v-model="ressourceForm.image"
						bordered
					/>
					<va-input
						class="my-4"
						label="Description"
						type="textarea"
						v-model="ressourceForm.description"
						bordered
					/>
					<va-rating
						class="my-4"
						v-model="ressourceForm.note"
					></va-rating>
					<va-select
						class="my-4"
						v-model="ressourceForm.lang"
						:options="optionsLang"
					>
					</va-select>
					<va-select
						class="my-4"
						v-model="ressourceForm.media"
						:options="optionsMedia"
					>
					</va-select>
				</va-form>
			</div>

			<template #footer>
				<va-button
					color="success"
					class="mr-4"
					:disabled="isDisabled"
					icon="add"
					@click="addRessourceAction"
				></va-button>
				<va-button
					color="danger"
					icon="close"
					@click="isOpen = false"
				></va-button>
			</template>
		</va-modal>
	</div>
</template>

<script>
	import { computed, ref } from '@vue/reactivity';
	import eventBus from '@/plugins/eventBus';
	import ressourceService from '@/services/ressourceService';
	import { useStore } from 'vuex';

	export default {
		setup() {
			const store = useStore();
			const isOpen = ref(false);
			const isDisabled = computed(() =>
				ressourceForm.value.title && ressourceForm.value.url
					? false
					: true
			);

			const optionsLang = [
				{
					text: 'Français',
					value: 'fr',
				},
				{
					text: 'Anglais',
					value: 'en',
				},
			];

			const optionsMedia = [
				{
					text: 'Article',
					value: 'post',
				},
				{
					text: 'Livre',
					value: 'book',
				},
				{
					text: 'Vidéo',
					value: 'video',
				},
			];

			const ressourceForm = ref({
				title: '',
				url: '',
				image: '',
				description: '',
				note: 0,
				lang: '',
				media: '',
			});

			const addRessourceAction = async () => {
				const currentDate = new Date();
				const isoDate = currentDate.toISOString();

				const newRessource = {
					...ressourceForm.value,
					isValid: false,
					date: isoDate,
					media: ressourceForm.value.media.value,
					lang: ressourceForm.value.lang.value,
				};

				const res = await ressourceService.addRessources(newRessource);

				if (res) {
					ressourceForm.value = {
						title: '',
						url: '',
						image: '',
						description: '',
						rating: 0,
						media: '',
						lang: '',
					};

					isOpen.value = false;

					store.dispatch('addRessourceAction', res);
				}
			};

			eventBus.on('create-ressource', () => {
				isOpen.value = true;
			});

			return {
				isOpen,
				ressourceForm,
				optionsLang,
				optionsMedia,
				isDisabled,
				addRessourceAction,
			};
		},
	};
</script>

<style lang="scss" scoped></style>
