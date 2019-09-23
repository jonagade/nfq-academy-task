<template>
	<div>
		<Title name="Specialist Page" :show="true" />
		<Select
			:items="specialists"
			:model.sync="selectedSpecialist"
			placeholder="Select Specialist"
		/>
		<div v-if="selectedSpecialist !== null" class="container col-4 mt-3">
			<table class="table table-bordered">
				<thead class="text-center">
					<th>Customer</th>
					<th>Action</th>
				</thead>
				<tbody class="text-center">
					<tr v-for="item in selectedSpecialistData">
						<td v-show="!item.served">{{ item.customer }}</td>
						<td v-show="!item.served">
							<Button
								name="Served"
								classes="btn-success"
								@click="customerServed(item)"
							/>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import Select from '../../components/Select';
    import Button from '../../components/Button';
    import Title from '../../components/Title';

    export default {
        components: {
            Select,
            Button,
	        Title,
        },

        data() {
            return {
                selectedSpecialist: null,
            }
        },

	    mounted() {
            this.refreshData();
	    },

        methods: {
            ...mapActions([
                'updateCustomer',
	            'refreshData',
            ]),

            customerServed(customer) {
                function search(el) {
                    return el === customer;
                }
                const payload = {
                    ...customer,
	                servedCustomerIndex: this.specialistDataArray.findIndex(search),
	                serveTimestamp: Math.floor(Date.now() / 1000),
                };
                console.log(payload.servedCustomerIndex);
                this.updateCustomer(payload);
            },
        },

        computed: {
            ...mapGetters([
                'specialists',
                'specialistDataArray',
            ]),

            selectedSpecialistData() {
                return this.specialistDataArray.filter(item => {
                    return item.specialist === this.selectedSpecialist;
                }).sort((a, b) => (a.customer > b.customer) ? 1 : ((a.customer < b.customer) ? -1 : 0));
            },
        },
    }
</script>

<style scoped>
	@import '../../assets/styles/global.scss';
</style>