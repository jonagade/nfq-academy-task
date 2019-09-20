import axios from 'axios';

export default {
    state: {
        specialistDataArray: [],
    },

    getters: {
        specialistDataArray(state) {
            return state.specialistDataArray;
        },
    },

    mutations: {
        setSpecialistData(state, payload) {
            state.specialistDataArray = payload;
        }
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
    },
}