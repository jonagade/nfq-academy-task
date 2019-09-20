import axios from 'axios';

export default {
    state: {
        specialistDataArray: [],
        specialists: [
            'Specialist 1',
            'Specialist 2',
            'Specialist 3',
        ],
    },

    getters: {
        specialistDataArray(state) {
            return state.specialistDataArray;
        },

        specialists(state) {
            return state.specialists;
        },
    },

    mutations: {
        setSpecialistData(state, payload) {
            state.specialistDataArray = payload;
        },
    },

    actions: {
        refreshData({commit, state}) {
            state.specialistDataArray = [];
            let dataArray = [];
            for (let i = 0; i < localStorage.length; i++) {
                let keyName = localStorage.key(i);
                let item = JSON.parse(localStorage.getItem(keyName));
                if (item !== null) {
                    dataArray.push(item);
                }
            }
            commit('setSpecialistData', dataArray);
        },

        importSpecialistData({dispatch}) {
            axios.get('https://api.myjson.com/bins/hfo11').then(response => {
                response.data.forEach((item, i) => {
                    localStorage.setItem(i, JSON.stringify(item));
                })
            }).then(() => {
                dispatch('refreshData');
            })
        },

        removeCustomer({dispatch, state}, payload) {
            let keyName = localStorage.key(payload);
            localStorage.removeItem(keyName);
            dispatch('refreshData');
        },
    },
}