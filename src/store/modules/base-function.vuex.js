import { isUndef } from '@/utiles/utiles';
const baseFunction = {
	namespaced: true,
	state: () => ({}),
	mutations: {
		updateCurComponent(state, componentEntiy) {
			Object.keys(componentEntiy).forEach(i => {
				if (componentEntiy[i]) this.state.curComponent[i] = componentEntiy[i];
			});
			this.commit('toolbar/setRevoke');
		},
	},
	actions: {},
	getters: {},
	modules: {},
};
export default baseFunction;
