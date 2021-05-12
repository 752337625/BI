<template>
    <div>
        <img :src="imgSrc" @error="imgError">
        <input type="file" id="file" hidden @change="changeFile" />
    </div>
</template>
<script>
export default {
	name: 'imgComponent',
	data() {
		return {
			imgSrc: '',
			file: null,
		};
	},
	mounted() {},
	methods: {
		open() {
			let file = document.getElementById('file');
			file.value = '';
			file.click();
		},
		changeFile(event) {
			let fileList = event.target.files;
			console.log(fileList);
		},
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