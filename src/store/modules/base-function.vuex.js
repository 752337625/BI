const baseFunction = {
	state: () => ({}),
	mutations: {
		updateCurComponent(state, componentEntiy) {
			Object.keys(componentEntiy).forEach(i => {
				if (componentEntiy[i]) this.state.curComponent[i] = componentEntiy[i];
			});
		},
	},
	actions: {},
	getters: {},
	modules: {},
};
export default baseFunction;
