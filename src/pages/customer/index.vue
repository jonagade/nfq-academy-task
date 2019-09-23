<template>
	<div>
		<div class="row justify-content-center">
			<Title name="Customer Page" :show="true" />
			<Input
				placeholder="Enter Your Number"
				:model.sync="customerNumber"
				@change="differentCustomer(interval)"
			/>
		</div>
		<div class="row justify-content-center">
			<Button
				name="Check Time"
				classes="btn-success"
				@click="checkTime(customerNumber)"
			/>
			<Button
				v-show="showTime && !message.show"
				name="Cancel"
				classes="btn-danger"
				@click="cancelMeeting(customerNumber)"
			/>
		</div>
		<div class="row justify-content-center mt-3">
			<p v-show="showTime && !message.show">
				Waiting time left: <strong>{{ timeLeft }}</strong> seconds
			</p>
			<p v-if="showTime" class="error-message">{{ message.text }}</p>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	import Input from '../../components/Input';
	import Button from '../../components/Button';
	import Title from '../../components/Title';

    export default {
		components: {
		    Input,
			Button,
			Title,
		},

	    data() {
		    return {
		        customerNumber: null,
			    timeLeft: null,
			    interval: null,
			    showTime: false,
			    message: '',
		    }
	    },

	    methods: {
		    ...mapActions([
		        'checkCustomerByNumber',
			    'cancelCustomer',
		    ]),

		    calculateTime(customerNumber) {
                const customerData = this.specialistDataArray.find(specialist => {
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
                const inLineBefore = customersInLineBySpecialist.indexOf(customerData);
                const timeLeft = customerData.creationTimestamp - checkTimestamp + (specialistAverage * inLineBefore);
			    if (inLineBefore > 0 && timeLeft > 0) {
                    this.timeLeft = timeLeft;
                } else {
                    this.timeLeft = 0;
                }
                this.showTime = true;
		    },

		    checkTime(customerNumber) {
		        const customerInLine = this.waitingCustomers.find(element => {
		            return element.customer === customerNumber;
		        });
		        if (customerInLine === undefined) {
		            this.message = {
		                show: true,
			            text: 'Number not found. Try different number.',
		            };
                    this.showTime = true;
		        } else {
                    this.calculateTime(customerNumber);
                    this.message = '';
                    this.interval = setInterval(() => {
                        this.calculateTime(customerNumber);
                    }, 5000);
		        }
		    },

		    cancelMeeting(customerNumber) {
                const customerInLine = this.waitingCustomers.find(element => {
                    return element.customer === customerNumber;
                });
                const customerBeingCancelled = this.specialistDataArray.find(element => {
                    return element.customer === customerNumber
                });
			    const customerIndex = this.specialistDataArray.indexOf(customerBeingCancelled);
				if (customerInLine === undefined) {
                    this.message = {
                        show: true,
                        text: `Can't cancel meeting, because number does not exist.`,
                    };
				} else {
					const payload = {
					    ...customerBeingCancelled,
						customerIndex,
					};
					this.cancelCustomer(payload);
					this.message = {
					    show: true,
						text: 'Meeting cancelled successfully.'
					}
				}
		    },

		    differentCustomer(interval) {
		        clearInterval(interval);
		    },
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
		        });
		    },
	    },
    }
</script>

<style scoped>
	@import '../../assets/styles/global.scss';
	@import '../../assets/styles/customer.scss';
</style>