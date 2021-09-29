<template>
	<va-navbar color="dark" text-color="#cdcdcd">
		<template #left>
			<router-link class="link" :to="{ name: 'Home' }">
				<va-navbar-item class="title-site"
					><va-icon name="home"></va-icon> Unicorn
					DevWall</va-navbar-item
				>
			</router-link>
		</template>
		<template #right>
			<va-navbar-item>
				<va-button class="mr-4" :to="{ name: 'About' }"
					>A propos</va-button
				>
				<va-button class="mr-4" :to="{ name: 'Admin' }"
					>Administration</va-button
				>
				<va-button
					icon-right="create"
					class="mr-4"
					@click="createRessource()"
					>Créer</va-button
				>
				<va-button
					icon-right="logout"
					color="danger"
					class="mr-4"
					@click="deconnectAction()"
					>Log Out</va-button
				>
			</va-navbar-item>
		</template>
	</va-navbar>
</template>

<script>
	import eventBus from '@/plugins/eventBus';
	import { useStore } from 'vuex';
	import { useRouter } from 'vue-router';

	export default {
		setup() {
			const store = useStore();
			const router = useRouter();
			const createRessource = () => eventBus.emit('create-ressource', {});
			const deconnectAction = () => {
				store.dispatch('updateCredentialsAction', {});
				router.push({ name: 'Home' });
			};

			return { createRessource, deconnectAction };
		},
	};
</script>

<style lang="scss" scoped></style>
