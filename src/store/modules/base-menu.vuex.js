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
			this.commit('toolbar/setRevoke');
		},
		setBGCCurComponent(state, color = '#FFF') {
			this.state.curComponent.style.backgroundColor = color;
			this.commit('toolbar/setRevoke');
		},
	},
	actions: {},
	getters: {},
	modules: {},
};
export default baseMenu;
