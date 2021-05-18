<template>
    <div class="vs-base-chart" :id="'chart-'+id"></div>
</template>
<script>
export default {
	name: 'baseChart',
	props: {
		chartOption: {
			type: Object,
			default: () => {
				return {};
			},
			require: true,
		},
		id: {
			type: [Number, String],
			default: '',
			require: true,
		},
	},
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
			this.baseChart.setOption(this.chartOption);
			window.onresize = () => {
				this.baseChart.resize();
			};
		},
		/**
		 * 监听dom属性更改来修改
		 */
		observe() {
			let observer = new MutationObserver((mutations, observer) => {
				this.baseChart.resize();
			});
			let baseFun = document.getElementById('vs-shape-1');
			observer.observe(baseFun, { attributeFilter: ['style'] });
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
