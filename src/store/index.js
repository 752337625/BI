import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import modules from './storeHandler';
Vue.use(Vuex);
const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	modules: modules,
});
export default store;
