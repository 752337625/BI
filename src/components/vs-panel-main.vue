<template>
    <div class="vs-panel-main">
        <base-scrollbar>
            <div class="vs-panel-body " id="vs-panel-body" @mousedown="handleMouseDown">
                <base-shape v-for="i in componentData" :style="setShapeStyle(i.style)" :defaultStyle="i.style" :element="i" :active="i.id === (curComponent?curComponent.id:'')" :index="i.id"
                    :key="i.id">
                    <component :is="i.is" :type="i.type" :style="setComponentStyle(i.style)" :index="i.id">查询</component>
                </base-shape>
            </div>
        </base-scrollbar>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import getComponentStyle from '@/utiles/getComponentStyle.js';
import getShapeStyle from '@/utiles/getShapeStyle.js';
import eventPolyFill from '@/utiles/eventPolyfill';
export default {
	name: 'vs-panel-main',
	data() {
		return {};
	},
	computed: {
		...mapState({
			curComponent: state => state.curComponent,
			componentData: state => state.componentData,
		}),
	},
	components: {
		'base-scrollbar': () => import('@/base/base-scrollbar'),
		'base-shape': () => import('@/base/base-shape'),
		'base-function': () => import('@/base/base-function'),
	},
	mounted() {
		//初始化快照
		this.setRevoke();
	},
	methods: {
		...mapMutations(['setCurComponent', 'setEventPosition', 'setRevoke']),
		setShapeStyle(style) {
			return getShapeStyle(style);
		},
		setComponentStyle(style) {
			return getComponentStyle(style);
		},
		handleMouseDown(e) {
			this.setEventPosition(e);
			this.setCurComponent({
				component: null,
				index: null,
			});
		},
		handleMouseMove(e) {},
	},
};
</script>
<style lang="less" scoped="scoped">
.vs-panel-main {
	width: 100%;
	height: 100%;
	background-color: #b3bec6;

	.vs-panel-body {
		margin: 10px;
		width: calc(100% - 20px);
		min-width: 862px;
		height: 100%;
		min-height: 500px;
		background-color: #fff;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
		position: relative;
	}
}
</style>
