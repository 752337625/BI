<template>
    <div>
        <input type="file" id='file' hidden @change="changeFile" />
        <img @error="imgError" :src="item.src">
        <base-menu v-show="curComponentIndex===index">
            <template v-slot:img-html>
                <i title="下载" class="iconfont icon-xingzhuang" @click="downloadFile"></i>
                <i title="上传" class="iconfont icon-shangchuantupian" @click="openFile"></i>
            </template>
        </base-menu>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
import regExp from '@/utiles/regExp';
export default {
	name: 'imgComponent',
	props: {
		index: {
			type: [Number, String],
		},
		item: {
			type: [Object],
			require: true,
			default: () => {
				return {};
			},
		},
	},
	computed: {
		...mapState({ curComponentIndex: state => state.curComponentIndex }),
	},
	data() {
		return {
			name: '',
		};
	},
	components: {
		'base-menu': () => import('../base/base-menu'),
	},
	mounted() {
		this.openFile();
	},
	methods: {
		...mapMutations('img-component', ['setImg']),
		...mapMutations('toolbar', ['setRevoke']),
		openFile() {
			let file = document.getElementById('file');
			file.value = '';
			file.click();
		},
		changeFile(event) {
			let file = event.target.files[0];
			let flag = regExp.isImgFn(file.name);
			if (!flag) return this.$message.error('只支持如下格式：png、jpeg、jpg、gif、svg、webp');
			this.name = file.name;
			let imgURL = URL.createObjectURL(file);
			this.setRevoke();
			this.setImg(imgURL);
		},
		imgError(event) {
			let imgDom = event.target;
			imgDom.classList.add('img--error');
			imgDom.setAttribute('alt', '图片加载异常请重新上传');
		},
		downloadFile() {
			if (!this.item.src) return this.$message.error('请上传图片资源');
			let a = document.createElement('a');
			a.setAttribute('href', this.item.src);
			a.setAttribute('download', `${this.name}`);
			a.click();
		},
	},
};
</script>
<style scoped lang='less'>
img {
	width: 100%;
	height: 100%;
	object-fit: contain;
}
</style>