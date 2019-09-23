<template>
	<div>
		<div class="row justify-content-around">
			<table
				class="table table-bordered col-3"
				v-for="(element, i) in timePerSpecialist"
				:key="i"
			>
				<thead class="text-center">
					<th>{{ element.specialist }} Time until next meeting approx.: {{ element.averageTime }} s</th>
				</thead>
				<tbody class="text-center">
					<tr
						class="first-customer"
						v-for="(item, i) in filteredCustomers(element.specialist)"
						:key="i"
					>
						<td>{{ item.customer }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
	    mounted() {
            this.refreshData();
	    },

        methods: {
            ...mapActions([
                'refreshData',
            ]),

            filteredCustomers(specialist) {
                return this.specialistDataArray.filter(element => {
                    if (!element.served) {
                        return element.specialist === specialist;
                    }
                }).sort((a, b) => (a.customer > b.customer) ? 1 : ((a.customer < b.customer) ? -1 : 0));
            },
        },

        computed: {
            ...mapGetters([
                'specialistDataArray',
	            'timePerSpecialist',
            ]),
        },
    }
</script>

<style scoped lang="scss">
	@import '../../assets/styles/board';
</style>