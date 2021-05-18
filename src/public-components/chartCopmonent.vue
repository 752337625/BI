<template>
    <div>
        <base-chart :chartOption="chartOption" id="1"></base-chart>
    </div>
</template>
<script>
import { option } from '@/utiles/chartOption.js';
export default {
	name: 'chartCopmonent',
	data() {
		return {
			chartOption: option,
			baseChart: null,
		};
	},
	components: {
		'base-chart': () => import('@/base/base-chart'),
	},
};
</script>
<style lang="less" scoped>
</style>
