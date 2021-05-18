<template>
    <div>
        <div class="vs-base-chart" id="chart-1"></div>
    </div>
</template>
<script>
import { option } from '@/utiles/chartOption.js';
export default {
	name: 'chartCopmonent',
	data() {
		return {
			baseChart: null,
		};
	},
	mounted() {
		this.initData();
		this.observe();
	},
	methods: {
		initData() {
			let dom = document.getElementById('chart-1');
			this.baseChart = echarts.init(dom);
			this.baseChart.setOption(option);
			window.onresize = () => {
				this.baseChart.resize();
			};
		},
		/**
		 * 监听dom属性更改来修改字体图标的大小和文字的大小
		 */
		observe() {
			let observer = new MutationObserver((mutations, observer) => {
				this.baseChart.resize();
			});
			let baseFun = document.getElementById('vs-shape-1');
			observer.observe(baseFun, { attributes: true });
		},
	},
};
</script>
<style lang="less" scoped>
.vs-base-chart {
	width: 100%;
	height: 100%;
}
</style>
