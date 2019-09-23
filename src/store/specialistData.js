import axios from 'axios';

export default {
    state: {
        isDataImported: false,
        specialistDataArray: [],
        specialists: [
            'Specialist 1',
            'Specialist 2',
            'Specialist 3',
        ],
        registrationMessage: '',
        errorMessage: '',
        timePerSpecialist: [],
        hideButton: false,
        loadingState: false,
    },

    getters: {
        specialistDataArray(state) {
            return state.specialistDataArray;
        },

        specialists(state) {
            return state.specialists;
        },

        isDataImported(state) {
            return state.isDataImported;
        },

        registrationMessage(state) {
            return state.registrationMessage;
        },

        errorMessage(state) {
            return state.errorMessage;
        },

        timePerSpecialist(state) {
            return state.timePerSpecialist;
        },

        hideButton(state) {
            return state.hideButton;
        },

        loadingState(state) {
            return state.loadingState;
        },
    },

    mutations: {
        setSpecialistData(state, payload) {
            state.specialistDataArray = payload;
        },

        setDataIsImported(state, payload) {
            state.isDataImported = payload;
        },

        setRegistrationMessage(state, payload) {
            state.registrationMessage = payload;
        },

        setErrorMessage(state, payload) {
            state.errorMessage = payload;
        },

        setTimePerSpecialist(state, payload) {
            state.timePerSpecialist = payload;
        },

        setHideButton(state, payload) {
            state.hideButton = payload;
        },

        setLoadingState(state, payload) {
            state.loadingState = payload;
        },
    },

    actions: {
        refreshData({commit, state}) {
            state.specialistDataArray = [];
            state.timePerSpecialist = [];
            let dataArray = [];
            for (let i = 0; i < localStorage.length; i++) {
                let item = JSON.parse(localStorage.getItem('item' + i));
                if (item !== null) {
                    dataArray.push(item);
                }
            }
            let specialistTimeArray = [];
            for (let i = 1; i <= localStorage.length; i++) {
                let specialist = JSON.parse(localStorage.getItem('specialist' + i));
                if (specialist !== null) {
                    specialistTimeArray.push(specialist);
                }
            }
            commit('setSpecialistData', dataArray);
            commit('setTimePerSpecialist', specialistTimeArray);
            commit('setDataIsImported', true);
        },

        importSpecialistData({dispatch, commit, state}, payload) {
            commit('setLoadingState', true);
            commit('setHideButton', true);
            axios.get('https://api.myjson.com/bins/ipa2x').then(response => {
                response.data.forEach((item, i) => {
                    localStorage.setItem('item' + i, JSON.stringify(item));
                });
                const customerDataBySpecialist = state.specialists.map(specialist => {
                    return {
                        specialist: specialist,
                        specialistData: response.data.filter(element => {
                            return element.specialist === specialist;
                        })
                    }
                });
                const workStarted = state.specialists.map(specialist => {
                    const currentSpecialist = customerDataBySpecialist.find(element => {
                        return element.specialist === specialist;
                    }).specialistData;
                    const average = currentSpecialist.reduce((total, next) => total + next.timeSpent, 0) / currentSpecialist.length;
                    return {
                        specialist: specialist,
                        averageTime: average,
                        timestamp: payload,
                    }
                });
                workStarted.forEach((specialist, i) => {
                    localStorage.setItem('specialist' + Number(i + 1), JSON.stringify(specialist));
                });
            }).then(() => {
                dispatch('refreshData');
            }).catch(() => {
                commit('setErrorMessage', 'Customer data import failed. Please try again later.')
            }).finally(() => {
                commit('setLoadingState', false);
            })
        },

        updateCustomer({dispatch, state}, payload) {
            localStorage.removeItem('item' + payload.servedCustomerIndex);
            const specialist = state.timePerSpecialist.find(element => {
                return element.specialist === payload.specialist;
            });
            const specialistNumber = state.timePerSpecialist.indexOf(specialist);
            const updatedSpecialist = {
                specialist: specialist.specialist,
                averageTime: specialist.averageTime,
                timestamp: payload.serveTimestamp,
            };
            localStorage.removeItem('specialist' + Number(specialistNumber + 1));
            localStorage.setItem('specialist' + Number(specialistNumber + 1), JSON.stringify(updatedSpecialist));
            const customerUpdate = {
                ...payload,
                ...specialist,
            };
            dispatch('updateCustomerStatus', customerUpdate);
        },

        updateCustomerStatus({dispatch, state}, payload) {
            const updatedCustomer = {
                specialist: payload.specialist,
                customer: payload.customer,
                served: true,
                timeSpent: payload.serveTimestamp - payload.timestamp,
            };
            localStorage.setItem('item' + payload.servedCustomerIndex, JSON.stringify(updatedCustomer));
            dispatch('refreshData');
        },

        createCustomer({dispatch, state, commit}, payload) {
            const currentSpecialistCustomers = state.specialistDataArray.filter(element => {
                return element.specialist === payload.specialist;
            });
            const customerData = {
                specialist: payload.specialist,
                customer: String(payload.code + currentSpecialistCustomers.length + 1),
                creationTimestamp: payload.creationTimestamp,
            };
            localStorage.setItem('item' + state.specialistDataArray.length, JSON.stringify(customerData));
            dispatch('refreshData');
            commit('setRegistrationMessage', `Registration was successful. Your number is: ${customerData.customer}.`);
        },

        cancelCustomer({dispatch}, payload) {
            const cancelledCustomer = {
                specialist: payload.specialist,
                customer: payload.customer,
                served: 'cancelled',
            };
            localStorage.removeItem('item' + payload.customerIndex);
            localStorage.setItem('item' + payload.customerIndex, JSON.stringify(cancelledCustomer));
            dispatch('refreshData');
        }
    },
}