<template>
	<div>
		<div class="row justify-content-center">
			<table
				class="table table-bordered col-4"
				v-for="specialist in specialists"
			>
				<thead class="text-center">
				<th>{{ specialist }}</th>
				</thead>
				<tbody class="text-center">
				<tr
					class="first-customer"
					v-for="item in filteredCustomers(specialist)"
				>
					<td>{{ item.customer }}</td>
				</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters([
                'specialists',
                'specialistDataArray',
            ]),
        },

        methods: {
            filteredCustomers(specialist) {
                return this.specialistDataArray.filter(element => {
                    if (!element.served) {
                        return element.specialist === specialist;
                    }
                }).sort((a, b) => (a.customer > b.customer) ? 1 : ((a.customer < b.customer) ? -1 : 0));
            }
        },
    }
</script>

<style scoped lang="scss">
	@import '../../assets/styles/board';
</style>