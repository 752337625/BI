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
		setBGCCurComponent(state, color) {
			this.state.curComponent.style.backgroundColor = color;
		},
	},
	actions: {},
	getters: {},
	modules: {},
};
export default baseMenu;
