<template>
	<h1 class="display-4">Administration</h1>
	<p class="my-4">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, hic ea.
		Doloribus perspiciatis enim inventore, eligendi molestias, ut ducimus
		quis doloremque sequi odio architecto quaerat? Porro veritatis obcaecati
		fugiat cumque?
	</p>
	<va-button-group class="my-4">
		<va-button
			color="warning"
			gradient
			text-color="#000000"
			:to="{ name: 'AdminManagement' }"
			>Gestion</va-button
		>
		<va-button
			color="success"
			gradient
			text-color="#000000"
			:to="{ name: 'AdminValidation' }"
			>Validation</va-button
		>
	</va-button-group>
	<router-view></router-view>
</template>

<script>
	export default {
		setup() {
			return {};
		},
	};
</script>

<style lang="scss" scoped></style>
