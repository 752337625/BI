<template>
    <div contentEditable>
        textComponent
        <base-menu v-show="curComponentIndex===index"> </base-menu>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
	name: 'textComponent',
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