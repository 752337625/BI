<template>
    <div>
        <base-chart :chartOption="chartOption" id="1"></base-chart>
        <base-menu v-show="curComponentIndex===index">
        </base-menu>
    </div>
</template>
<script>
import { option } from '@/utiles/chartOption.js';
import { mapState } from 'vuex';
export default {
	name: 'chartCopmonent',
	props: {
		index: {
			type: [Number, String],
		},
	},
	computed: {
		...mapState({ curComponentIndex: state => state.curComponentIndex }),
	},
	data() {
		return {
			chartOption: option,
			baseChart: null,
		};
	},
	components: {
		'base-chart': () => import('@/base/base-chart'),
		'base-menu': () => import('../base/base-menu'),
	},
};
</script>
<style lang="less" scoped>
</style>
