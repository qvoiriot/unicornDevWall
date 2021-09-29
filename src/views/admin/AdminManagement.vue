<template>
	<h1 class="display-4 mb-4">Gestion des ressources</h1>
	<div class="row">
		<va-card>
			<ul
				class="flex xs12 md12 lg12 pa-1 pl-3"
				v-for="ressource in validatedRessources"
				:key="ressource.id"
			>
				<li>
					<va-button
						class="mx-2"
						color="danger"
						icon="delete"
						@click="deleteRessourceAction(ressource)"
					></va-button>
					{{ ressource.title }}
				</li>
			</ul>
		</va-card>
	</div>
</template>

<script>
	import useAdminRessources from '@/composables/useAdminRessources'

	export default {
		setup() {
			
            const{ validatedRessources, deleteRessourceAction} = useAdminRessources();

			return {
                validatedRessources, deleteRessourceAction
			};
		},
	};
</script>

<style lang="scss" scoped></style>
