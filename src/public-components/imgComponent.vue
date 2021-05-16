<template>
    <div>
        <img :src="curComponent.src" @error="imgError">
        <base-menu>
            <template v-slot:imgComponent>
                <p><i class="iconfont icon-xiazai1" title="下载"></i></p>
            </template>
        </base-menu>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
	components: {
		'base-menu': () => import('../base/base-menu'),
	},
	name: 'imgComponent',
	data() {
		return {};
	},

	computed: {
		...mapState({
			curComponent: state => state.curComponent,
		}),
	},
	mounted() {},
	methods: {
		...mapMutations('base-function', ['updateCurComponent']),
		imgError(event) {
			let imgDom = event.target;
			imgDom.classList.add('img--error');
			imgDom.setAttribute('alt', '图片加载异常请重新上传');
		},
	},
};
</script> 
<style scoped lang='less'>
img {
	width: 100%;
	height: 100%;
}
</style>