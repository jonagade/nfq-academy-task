<template>
	<div>
		<h3 class="title my-3">Administration page</h3>
		<div class="row justify-content-center">
			<Button
				name="Import Data"
				@click="importData"
			/>
			<Button
				name="Board Page"
				@click="toBoardPage"
				v-show="isDataImported"
			/>
			<Button
				name="Specialist Page"
				@click="toSpecialistPage"
				v-show="isDataImported"
			/>
		</div>
		<div v-show="isDataImported">
			<div class="row mt-3">
				<Select
					:items="specialists"
					:model.sync="selectedSpecialist"
					placeholder="Select Specialist"
				/>
			</div>
			<div class="row mt-3 justify-content-center">
				<Button
					name="Register"
					@click="createNewCustomer"
				/>
			</div>
			<div class="row mt-3 justify-content-center">
				<span>{{ registrationMessage }}</span>
			</div>
		</div>
	</div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import router from '../router';
    import Button from '../components/Button';
    import Select from '../components/Select';

    export default {
        components: {
            Button,
	        Select,
        },

	    data() {
            return {
                selectedSpecialist: null,
            }
	    },

        methods: {
            ...mapActions([
                'importSpecialistData',
	            'createCustomer',
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

	        createNewCustomer() {
                const customer = {
                    specialist: this.selectedSpecialist,
	                code: Number(this.selectedSpecialistCode),
                };
                this.createCustomer(customer);
	        }
        },

	    computed: {
            ...mapGetters([
                'specialists',
	            'isDataImported',
	            'registrationMessage',
            ]),

		    specialistsWithCode() {
                return this.specialists.map((specialist, i) => {
                    return {
                        name: specialist,
	                    code: i + 1 + '00',
                    }
                })
		    },

		    selectedSpecialistCode() {
                if (this.selectedSpecialist !== null) {
                    return this.specialistsWithCode.find(specialist => {
                        return specialist.name === this.selectedSpecialist;
                    }).code;
                } else {
                    return ''
                }
		    }
	    }
    }
</script>

<style scoped lang="scss">
	@import '../assets/styles/global';
</style>