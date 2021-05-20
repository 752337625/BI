<template>
    <div>
        <base-chart :chartOption="chartOption" id="1"></base-chart>
        <base-menu v-show="curComponentIndex===index"></base-menu>
    </div>
</template>
<script>
import { option } from '@/utiles/chartOption.js';
import baseMenu from '@/mixin/base-menu';
export default {
	name: 'chartCopmonent',
	mixins: [baseMenu],
	props: {
		index: {
			type: [Number, String],
		},
	},
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
