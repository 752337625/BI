<template>
    <div>
        <ul>
            <li>
                <div class="vs-iconfont" @click="fun(1)">
                    <i class="iconfont icon-wenzi"></i>
                </div>
                <p>插入文字</p>
            </li>
            <li>
                <div class="vs-iconfont" @click="fun(2)">
                    <i class="iconfont icon-barchart"></i>
                </div>
                <p>插入图表</p>
            </li>
            <li>
                <div class="vs-iconfont" @click="fun(3)">
                    <i class="iconfont icon-tupian"></i>
                </div>
                <p>插入图片</p>
            </li>
            <li>
                <div class="vs-iconfont" @click="fun(4)">
                    <i class="iconfont icon-puzzle-piece-plugin"></i>
                </div>
                <p>插入插件</p>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
import ComponentEntiy from '@/entity/ComponentEntiy';
export default {
	name: 'baseFunction',
	methods: {
		...mapMutations(['updateCurComponent']),
		fun(num) {
			switch (num) {
				case 1:
					this.updateCurComponent(new ComponentEntiy({ is: 'text-component' }));
					break;
				case 2:
					this.updateCurComponent(new ComponentEntiy({ is: 'chart-copmonent' }));
					break;
				case 3:
					this.updateCurComponent(new ComponentEntiy({ is: 'img-component' }));
					break;
				case 4:
					this.updateCurComponent(new ComponentEntiy({ is: 'plugin-component' }));
					break;
			}
		},
		/**
		 * 监听dom属性更改来修改字体图标的大小和文字的大小
		 */
		observe() {
			// let realDomIndex = this.index - 1;
			// this.observer = new MutationObserver((mutations, observer) => {
			// 	let target = mutations[realDomIndex];
			// 	if (!target) return;
			// 	let dom = mutations[realDomIndex].target;
			// 	let width = regExp.getNumberFn(dom.style.width);
			// 	let height = regExp.getNumberFn(dom.style.height);
			// });
			// let baseFun = document.getElementsByClassName('baseFunction')[realDomIndex];
			// this.observer.observe(baseFun, { attributes: true });
		},
	},
};
</script>
<style lang="less" scoped="scoped">
ul {
	width: 100%;
	min-width: 347px;
	display: flex;
	position: absolute;
	top: 50%;
	transform: translate(0, -50%);
	li {
		width: calc(100% / 4);
		text-align: center;
		.vs-iconfont {
			height: 50px;
			width: 50px;
			line-height: 50px;
			margin: 0 auto 10px;
			background-color: #f0f1f2;
			box-shadow: 0 0 10px 0 rgba(12, 69, 55, 0.2);
			border-radius: 50%;
			cursor: pointer;
			&:hover {
				background-color: #07bf84;
			}
		}
	}
}
</style>
