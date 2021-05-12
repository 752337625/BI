const baseFunction = {
	state: () => ({}),
	mutations: {
		updateCurComponent(state, type) {
			this.state.curComponent.is = type;
		},
	},
	actions: {},
	getters: {},
	modules: {},
};
export default baseFunction;
