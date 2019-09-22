<template>
	<div>
		<div class="row justify-content-center">
			<h3 class="title my-3">Customer Page</h3>
			<Input
				placeholder="Enter Your Number"
				:model.sync="customerNumber"
				@change="differentCustomer(interval)"
			/>
		</div>
		<div class="row justify-content-center">
			<Button
				name="Check Time"
				@click="checkTime(customerNumber)"
			/>
		</div>
		<div class="row justify-content-center mt-3" v-show="showTime">
			<h4>Waiting time left: {{ timeLeft }} seconds</h4>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
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
			    timeLeft: null,
			    interval: null,
			    showTime: false,
		    }
	    },

	    methods: {
		    ...mapActions([
		        'checkCustomerByNumber',
		    ]),

		    calculateTime(customerNumber) {
                let customerData = this.specialistDataArray.find(specialist => {
                    return specialist.customer === customerNumber;
                });
                const specialist = this.timePerSpecialist.find(element => {
                    return element.specialist === customerData.specialist;
                });
                const specialistAverage = specialist.averageTime;
                const customersInLineBySpecialist = this.waitingCustomersBySpecialist.find(element => {
                    return element.specialist === specialist.specialist;
                }).customers;
                const checkTimestamp = Math.floor(Date.now() / 1000);
                let inLineBefore = customersInLineBySpecialist.indexOf(customerData);
                let timeLeft = customerData.creationTimestamp - checkTimestamp + (specialistAverage * inLineBefore);
			    if (inLineBefore > 0 && timeLeft > 0) {
                    this.timeLeft = timeLeft;
                } else {
                    this.timeLeft = 0;
                }
                this.showTime = true;
		    },

		    checkTime(customerNumber) {
		        this.calculateTime(customerNumber);
	            this.interval = setInterval(() => {
		            this.calculateTime(customerNumber);
	            }, 5000)
		    },

		    differentCustomer(interval) {
		        clearInterval(interval);
		    }
	    },

	    computed: {
		    ...mapGetters([
		        'specialistDataArray',
			    'timePerSpecialist',
			    'specialists',
		    ]),

		    waitingCustomers() {
		        return this.specialistDataArray.filter(element => {
		            return !element.served;
		        }).sort((a, b) => (a.customer > b.customer) ? 1 : ((a.customer < b.customer) ? -1 : 0));
		    },

		    waitingCustomersBySpecialist() {
		        return this.specialists.map(specialist => {
		            return {
		                specialist: specialist,
			            customers: this.waitingCustomers.filter(element => {
			                return element.specialist === specialist;
			            })
		            }
		        })
		    }
	    },
    }
</script>

<style scoped>
	@import '../../assets/styles/global.scss';
</style>