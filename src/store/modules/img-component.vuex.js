const imgComponent = {
	namespaced: true,
	state: () => ({}),
	mutations: {
		setImg(state, imgURL) {
			this.state.curComponent.src = imgURL;
            this.commit('toolbar/setRevoke');
		},
	},
	actions: {},
	getters: {},
	modules: {},
};
export default imgComponent;
