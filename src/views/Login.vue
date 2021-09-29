<template>
	<div>
		<h1 class="display-4">Connexion</h1>
		<va-form color="black">
			<va-input
				@click="errorMessage = ''"
				class="my-4"
				bordered
				label="email"
				v-model="email"
			></va-input>
			<va-input
				@click="errorMessage = ''"
				label="Password"
				type="password"
				v-model="password"
				class="my-4"
				bordered
			></va-input>
			<va-button @click="connectAction">Connexion</va-button>
			<va-alert class="my-4" color="danger" v-if="errorMessage">{{
				errorMessage
			}}</va-alert>
			<va-alert class="my-4" color="success" v-if="successMessage">{{
				successMessage
			}}</va-alert>
		</va-form>
	</div>
</template>

<script>
	import { ref } from '@vue/reactivity';
	import authService from '@/services/authService';
	import { useStore } from 'vuex';
	import { useRouter } from 'vue-router';

	export default {
		setup() {
			const store = useStore();
			const router = useRouter();
			const email = ref('admin@gmail.com');
			const password = ref('12345');
			const errorMessage = ref();
			const successMessage = ref();

			const connectAction = async () => {
				const res = await authService.signIn(
					email.value,
					password.value
				);
				if (res) {
					successMessage.value = 'Welcome back Unicorn !';
					store.dispatch('updateCredentialsAction', res);
					router.push({ name: 'Admin' });
				} else {
					errorMessage.value = 'Mauvais login ou mot de passe';
				}
			};

			return {
				email,
				password,
				connectAction,
				errorMessage,
				successMessage,
			};
		},
	};
</script>

<style lang="scss" scoped></style>
