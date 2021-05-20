<template>
    <div>
        pluginComponent
        <base-menu v-show="curComponentIndex===index"> </base-menu>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
	name: 'pluginComponent',
	props: {
		index: {
			type: [Number, String],
		},
	},
	computed: {
		...mapState({ curComponentIndex: state => state.curComponentIndex }),
	},
	components: {
		'base-menu': () => import('../base/base-menu'),
	},
};
</script> 
<style scoped lang='less'>
</style>