const baseMenu = {
	namespaced: true,
	state: () => ({}),
	mutations: {
		setZIndexCurComponent(state, str) {
			if (str === '-') {
				let zIndex = this.state.curComponent.style.zIndex;
				if (zIndex === 1) return;
				this.state.curComponent.style.zIndex--;
			} else {
				this.state.curComponent.style.zIndex++;
			}
		},
	},
	actions: {},
	getters: {},
	modules: {},
};
export default baseMenu;
