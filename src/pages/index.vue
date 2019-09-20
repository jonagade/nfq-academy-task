<template>
	<div>
		<h3 class="title my-3">Administration page</h3>
		<div class="content">
			<Button
				name="Import Data"
				@click="importData"
			/>
			<Button
				name="Board Page"
				@click="toBoardPage"
			/>
			<Button
				name="Specialist Page"
				@click="toSpecialistPage"
			/>
		</div>
	</div>
</template>

<script>
    import { mapActions } from 'vuex';
    import router from '../router';
    import Button from '../components/Button';

    export default {
        components: {
            Button,
        },

        methods: {
            ...mapActions([
                'importSpecialistData',
            ]),

            importData() {
                this.importSpecialistData();
            },

            toBoardPage() {
                router.push('/board');
            },

            toSpecialistPage() {
                router.push('/specialist');
            },
        },
    }
</script>

<style scoped lang="scss">
	@import '../assets/styles/global';

	.content {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
</style>