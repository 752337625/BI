import { isUndef } from '@/utiles/utiles';
const baseFunction = {
	namespaced: true,
	state: () => ({}),
	mutations: {
		updateCurComponent(state, componentEntiy) {
			Object.keys(componentEntiy).forEach(i => {
				if (componentEntiy[i]) this.state.curComponent[i] = componentEntiy[i];
			});
			console.log(this.state.curComponent);
		},
	},
	actions: {},
	getters: {},
	modules: {},
};
export default baseFunction;
