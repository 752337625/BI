import ComponentEntiy from '@/entity/ComponentEntiy';
import Style from '@/entity/Style';
import { deepClone } from '@/utiles/utiles';
const toolbar = {
	namespaced: true,
	state: () => ({
		revoke: [], //撤销
		redo: [], //重做
		save: [], //保存
	}),
	mutations: {
		/**
		 * 新增ComponentData
		 */
		setPushComponentData(state) {
			let length = this.state.componentData.length;
			this.state.componentData.push(new ComponentEntiy({ id: length + 1, is: 'base-function', style: new Style() }));
			this.commit('toolbar/setRevoke');
		},
		/**
		 * 压栈进行快照,注意每次压栈都是最新的，如何不压最新的情况下设计？
		 * 可以再操作的地方进行深拷复制一份传过来，这样依赖太大
		 * 或者使用watch监听函数+节流防抖
		 */
		setRevoke(state) {
			let componentData = deepClone(this.state.componentData);
			state.revoke.push(componentData);
		},
		/***
		 * 撤销撤销快照
		 */
		popRevoke(state) {
			let componentData = state.revoke.pop() || [];
			this.state.componentData = componentData;
			if (componentData.length !== 0) this.commit('toolbar/setRedo', componentData);
		},
		/**
		 * 压栈重做
		 */
		setRedo(state, componentData) {
			state.redo.push(componentData);
		},
		/**
		 * 撤销重做快照
		 */
		popRedo(state) {
			let length = state.redo.length;
			if (length === 0) return;
			let componentData = state.redo.pop() || [];
			this.state.componentData = componentData;
			this.commit({ type: 'toolbar/setRevoke' });
		},
	},
	actions: {},
	getters: {},
	modules: {},
};
export default toolbar;
