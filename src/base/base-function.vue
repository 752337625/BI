<template>
    <div class="baseFunction">
        <ul class="clearfix">
            <li>
                <div>
                    <i class="iconfont icon-wenzi"></i>
                </div>
                <p>插入文字</p>
            </li>
            <li>
                <div>
                    <i class="iconfont icon-barchart"></i>
                </div>
                <p>插入图表</p>
            </li>
            <li>
                <div>
                    <i class="iconfont icon-tupian"></i>
                </div>
                <p>插入图片</p>

            </li>
            <li>
                <div>
                    <i class="iconfont icon-puzzle-piece-plugin"></i>
                </div>
                <p>插入插件</p>
            </li>
        </ul>
    </div>
</template>
<script>
import eventPolyFill from '@/utiles/eventPolyfill';
import regExp from '@/utiles/regExp';
export default {
	name: 'baseFunction',
	props: {
		index: {
			require: true,
			type: [Number, String],
		},
	},
	data() {
		return {
			observer: null,
		};
	},
	mounted() {
		this.observe();
		this.$once('hook:beforeDestroy', () => {
			this.observer.disconnect();
			this.observer = null;
		});
	},
	methods: {
		/**
		 * 监听dom属性更改来修改字体图标的大小和文字的大小
		 */
		observe() {
			let realDomIndex = this.index - 1;
			this.observer = new MutationObserver((mutations, observer) => {
				let target = mutations[realDomIndex];
				if (!target) return;
				let dom = mutations[realDomIndex].target;
				let width = regExp.getNumberFn(dom.style.width);
				let height = regExp.getNumberFn(dom.style.height);
			});
			let baseFun = document.getElementsByClassName('baseFunction')[realDomIndex];
			this.observer.observe(baseFun, { attributes: true });
		},
	},
};
</script>

<style lang=less scope="scope">
.baseFunction {
}
ul {
	font-size: 16px;
	position: absolute;
	top: 50%;
	transform: translate(0, -50%);
	li {
		float: left;
        /* max-width: 100px; */
	}
}
</style>
