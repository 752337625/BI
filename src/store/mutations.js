import { deepClone } from '@/utiles/utiles';
import Style from '@/entity/Style';
const mutations = {
	/**
	 * 设置当前点击元素，下标
	 */
	setCurComponent(state, { component, index }) {
		state.curComponent = component;
		state.curComponentIndex = index;
	},
	/**
	 * 点击面板定位当前鼠标坐标
	 */
	setEventPosition(state, eventPositionObject) {
		let { offsetX, offsetY, clientX, clientY, screenX, screenY, pageX, pageY } = eventPositionObject;
		state.eventPosition = {
			offsetX,
			offsetY,
			clientX,
			clientY,
			screenX,
			screenY,
			pageX,
			pageY,
		};
	},
	/**
	 * 只设置top、left、width、height
	 */
	setShapeStyle(state, style) {
		state.curComponent.style.top = style.top;
		state.curComponent.style.left = style.left;
		state.curComponent.style.height = style.height;
		state.curComponent.style.width = style.width;
	},
	/**
	 * 新增ComponentData
	 */
	setPushComponentData(state) {
		let length = state.componentData.length;
		state.componentData.push({ id: length + 1, is: 'base-function', type: 'primary', style: new Style() });
		this.commit({ type: 'setRevoke' });
	},
	/**
	 * 压栈进行快照
	 */
	setRevoke(state) {
		let componentData = deepClone(state.componentData);
		state.revoke.push(componentData);
		console.log(state.revoke);
	},
	/***
	 * 撤销快照
	 */
	popRevoke(state) {
		//取出撤销快照最后赋给componentData
		if (state.revoke.length === 0) return;
		let curComponent = state.revoke.pop();
		state.componentData = curComponent;
	},
};
export default mutations;
