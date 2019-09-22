<template>
	<div>
		<h3 class="title my-3">Specialist Page</h3>
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

    export default {
        components: {
            Select,
            Button,
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

                let servedCustomerIndex = this.specialistDataArray.findIndex(search);
                const payload = {
                    ...customer,
	                servedCustomerIndex,
	                serveTimestamp: Math.floor(Date.now() / 1000),
                };
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
            }
        }
    }
</script>

<style scoped>
	@import '../../assets/styles/global.scss';
</style>