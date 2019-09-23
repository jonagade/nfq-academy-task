<template>
	<div>
		<Title name="Administration Page" :show="true" />
		<div class="row justify-content-center">
			<Button
				v-show="!hideButton"
				name="Import Data"
				classes="btn-success"
				@click="importData"
			/>
			<div class="spinner-border text-success" v-show="loadingState"></div>
			<Button
				name="Board Page"
				classes="btn-success"
				@click="toBoardPage"
				v-show="isDataImported"
			/>
			<Button
				name="Specialist Page"
				classes="btn-success"
				@click="toSpecialistPage"
				v-show="isDataImported"
			/>
			<Button
				name="Customer Page"
				classes="btn-success"
				@click="toCustomerPage"
				v-show="isDataImported"
			/>
		</div>
		<div class="row justify-content-center mt-3">
			<span>{{ errorMessage }}</span>
		</div>
		<Title name="Registration" :show="isDataImported" />
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
					classes="btn-success"
					@click="createNewCustomer"
				/>
			</div>
			<div class="row mt-3 justify-content-center">
				<span class="message-color">{{ registrationMessage }}</span>
			</div>
		</div>
	</div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import router from '../router';
    import Button from '../components/Button';
    import Select from '../components/Select';
    import Title from '../components/Title';

    export default {
        components: {
            Button,
	        Select,
	        Title,
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
                const workStarted = Math.floor(Date.now() / 1000);
                this.importSpecialistData(workStarted);
            },

            toBoardPage() {
                router.push('/board');
            },

            toSpecialistPage() {
                router.push('/specialist');
            },

	        toCustomerPage() {
                router.push('/customer');
	        },

	        createNewCustomer() {
                const customer = {
                    specialist: this.selectedSpecialist,
	                code: Number(this.selectedSpecialistCode),
	                creationTimestamp: Math.floor(Date.now() / 1000),
                };
                this.createCustomer(customer);
	        }
        },

	    computed: {
            ...mapGetters([
                'specialists',
	            'isDataImported',
	            'registrationMessage',
	            'errorMessage',
	            'hideButton',
	            'loadingState',
            ]),

		    specialistsWithCode() {
                return this.specialists.map((specialist, i) => {
                    return {
                        name: specialist,
	                    code: i + 1 + '000',
                    }
                });
		    },

		    selectedSpecialistCode() {
                if (this.selectedSpecialist !== null) {
                    return this.specialistsWithCode.find(specialist => {
                        return specialist.name === this.selectedSpecialist;
                    }).code;
                } else {
                    return ''
                }
		    },
	    },
    }
</script>

<style scoped lang="scss">
	@import '../assets/styles/global.scss';
	@import '../assets/styles/admin.scss';
</style>