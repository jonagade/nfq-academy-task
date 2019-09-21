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
        }
    },

    actions: {
        refreshData({commit, state}) {
            state.specialistDataArray = [];
            let dataArray = [];
            for (let i = 0; i < localStorage.length; i++) {
                let item = JSON.parse(localStorage.getItem('item' + i));
                if (item !== null) {
                    dataArray.push(item);
                }
            }
            commit('setSpecialistData', dataArray);
            commit('setDataIsImported', true);
        },

        importSpecialistData({dispatch}) {
            axios.get('https://api.myjson.com/bins/hfo11').then(response => {
                response.data.forEach((item, i) => {
                    localStorage.setItem('item' + i, JSON.stringify(item));
                })
            }).then(() => {
                dispatch('refreshData');
            })
        },

        updateCustomer({dispatch}, payload) {
            localStorage.removeItem('item' + payload.servedCustomer);
            dispatch('updateCustomerStatus', payload);
        },

        updateCustomerStatus({dispatch}, payload) {
            const updatedCustomer = {
                specialist: payload.specialist,
                customer: payload.customer,
                served: true,
            };
            localStorage.setItem('item' + payload.servedCustomer, JSON.stringify(updatedCustomer));
            dispatch('refreshData');
        },

        createCustomer({dispatch, state, commit}, payload) {
            let currentSpecialistCustomers = state.specialistDataArray.filter(element => {
                return element.specialist === payload.specialist;
            });
            const customerData = {
                specialist: payload.specialist,
                customer: String(payload.code + currentSpecialistCustomers.length + 1),
            };
            localStorage.setItem('item' + state.specialistDataArray.length, JSON.stringify(customerData));
            dispatch('refreshData');
            commit('setRegistrationMessage', `Registration was successful. Your number is: ${customerData.customer}`);
        },
    },
}