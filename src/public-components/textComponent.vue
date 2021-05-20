<template>
    <div contentEditable>
        textComponent
        <base-menu v-show="curComponentIndex===index"> </base-menu>
    </div>
</template>
<script>
import baseMenu from '@/mixin/base-menu';
export default {
	name: 'textComponent',
    mixins: [baseMenu],
	props: {
		index: {
			type: [Number, String],
		},
	},
};
</script>
<style scoped lang='less'>
</style>