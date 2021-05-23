<template>
    <div class="vs-panel-main">
        <div class="vs-panel-body " id="vs-panel-body" @mousedown="handleMouseDown">
            <base-shape v-for="i in componentData" :style="setShapeStyle(i.style)" :defaultStyle="i.style" :element="i" :active="i.id === curComponentIndex" :index="i.id" :key="i.id">
                <component :is="i.is" :type="i.type" :style="setComponentStyle(i.style)" :index="i.id" class="vs-baseFunction" :item='i'></component>
            </base-shape>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import getComponentStyle from '@/utiles/getComponentStyle.js';
import getShapeStyle from '@/utiles/getShapeStyle.js';
import { _debounce } from '@/utiles/utiles';
export default {
	name: 'vs-panel-main',
	data() {
		return {};
	},
	computed: {
		...mapState({
			curComponentIndex: state => state.curComponentIndex,
			componentData: state => state.componentData,
		}),
	},
	components: {
		'base-scrollbar': () => import('@/base/base-scrollbar'),
		'base-shape': () => import('@/base/base-shape'),
		'base-function': () => import('@/base/base-function'),
		'text-component': () => import('@/public-components/textComponent'),
		'plugin-component': () => import('@/public-components/pluginComponent'),
		'img-component': () => import('@/public-components/imgComponent'),
		'function-component': () => import('@/public-components/functionComponent'),
		'chart-copmonent': () => import('@/public-components/chartCopmonent'),
	},
	mounted() {
		//this.setRevoke();
	},
	methods: {
		...mapMutations(['setCurComponent', 'setRevoke']),
		setShapeStyle(style) {
			return getShapeStyle(style);
		},
		setComponentStyle(style) {
			return getComponentStyle(style);
		},
		handleMouseDown(e) {
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
		height: calc(100% - 20px);
		min-width: 862px;
		min-height: 500px;
		background-color: #fff;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
		position: relative;
		overflow: auto;
		.vs-baseFunction {
			width: 100%;
			height: 100%;
		}
	}
}
</style>
