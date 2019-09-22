<template>
	<div>
		<div class="row justify-content-center">
			<h3 class="title my-3">Customer Page</h3>
			<Input
				placeholder="Enter Your Number"
				:model.sync="customerNumber"
			/>
		</div>
		<div class="row justify-content-center">
			<Button
				name="Check Time"
				@click="checkTime(customerNumber)"
			/>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';
	import Input from '../../components/Input';
	import Button from '../../components/Button';

    export default {
		components: {
		    Input,
			Button,
		},

	    data() {
		    return {
		        customerNumber: null,
		    }
	    },

	    methods: {
		    ...mapActions([
		        'checkCustomerByNumber',
		    ]),

		    checkTime(customerNumber) {

		    }
	    },
    }
</script>

<style scoped>
	@import '../../assets/styles/global.scss';
</style>