import Vue from 'vue';
import Vuex from 'vuex';
import Page from './page'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Page
    }
})