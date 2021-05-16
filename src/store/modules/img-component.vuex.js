const imgComponent = {
	namespaced: true,
	state: () => ({}),
	mutations: {
		setImg(state, imgURL) {
			this.state.curComponent.src = imgURL;
		},
	},
	actions: {},
	getters: {},
	modules: {},
};
export default imgComponent;
