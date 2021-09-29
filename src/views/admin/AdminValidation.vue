<template>
	<h1 class="display-4 mb-4">Validation des ressources</h1>
	<div class="row">
		<va-card>
			<ul
				class="flex xs12 md12 lg12 pa-1 pl-3"
				v-for="ressource in unvalidatedRessources"
				:key="ressource.id"
			>
				<li>
					<va-button
						color="danger"
						icon="delete"
						@click="deleteRessourceAction(ressource)"
					></va-button>
					<va-button
						class="mx-2"
						color="success"
						icon="done"
						@click="validateRessourceAction(ressource)"
					></va-button>
					{{ ressource.title }}
				</li>
			</ul>
		</va-card>
	</div>
</template>

<script>
	import useAdminRessources from '@/composables/useAdminRessources';

	export default {
		setup() {
			const {
				unvalidatedRessources,
				deleteRessourceAction,
				validateRessourceAction,
			} = useAdminRessources();

			return {
				unvalidatedRessources,
				deleteRessourceAction,
				validateRessourceAction,
			};
		},
	};
</script>

<style lang="scss" scoped></style>
