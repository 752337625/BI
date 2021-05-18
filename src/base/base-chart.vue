<template>
    <div class="vs-base-chart" >

    </div>
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
	mounted() {
        // console.log(this.chartOption,this.id)
		// this.initData();
	},
	methods: {
		initData() {
			let dom = document.getElementById(this.id);
			let baseChart = echarts.init(dom);
			baseChart.setOption(this.chartOption);
			window.onresize = () => {
				baseChart.resize();
			};
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
