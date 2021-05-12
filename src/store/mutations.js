const mutations = {
	/**
	 * 设置当前点击元素，下标
	 */
	setCurComponent(state, { component, index }) {
		state.curComponent = component;
		state.curComponentIndex = index;
	},
	/**
	 * 只设置top、left、width、height
	 * 我在需修改当前组件同时也在修改componentData中的属性
	 */
	setShapeStyle(state, style) {
		state.curComponent.style.top = style.top;
		state.curComponent.style.left = style.left;
		state.curComponent.style.height = style.height;
		state.curComponent.style.width = style.width;
	},
    /**
     * baseFuntiocn点击处理
     * @param {*} state 
     * @param {*} componentEntiy 
     */
    updateCurComponent(state, componentEntiy) {
        Object.keys(componentEntiy).forEach(i => {
            if (componentEntiy[i]) state.curComponent[i] = componentEntiy[i];
        });
    },
};
export default mutations;
