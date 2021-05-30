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
		 * MutationObserver监听dom属性更改来修改
		 *但是，它与事件有一个本质不同：事件是同步触发，也就是说，
		 *DOM 的变动立刻会触发相应的事件；Mutation Observer 则是异步触发，
		 *DOM 的变动并不会马上触发，而是要等到当前所有 DOM 操作都结束才触发。
		 */
		observe() {
			let observer = new MutationObserver((mutations, observer) => {
				this.baseChart.resize();
			});
			let baseFun = document.getElementById('vs-shape-1');
			observer.observe(baseFun, { attributeFilter: ['style'] });
			this.$once('hook:beforeDestroy', function () {
				observer.disconnect();
			});
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
