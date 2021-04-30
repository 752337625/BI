import Style from '@/entity/Style';
const state = {
	curComponent: null, //确定当前组件对象
	curComponentIndex: null, //确定当前组件对象在数组中的下标
	revoke: [], //撤销
	redo: [], //重做
	save: [], //保存
	componentData: [
		{
			id: 1,
			is: 'base-function',
			type: 'primary',
			style: new Style(),
		},
	], //组件数据
	eventPosition: {},
};
export default state;
