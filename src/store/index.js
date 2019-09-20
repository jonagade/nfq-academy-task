import Vue from 'vue';
import Vuex from 'vuex';
import SpecialistData from './specialistData';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        SpecialistData,
    },
});