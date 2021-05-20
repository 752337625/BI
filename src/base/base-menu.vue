<template>
    <div class="vs-menu" style="height:auto">
        <div style="height: auto;">
            <i title="隐藏" :class="['iconfont',isMenu?'icon-jianhao2':'icon-jiahao1'] " @click.prevent.stop="hideMenu($event)"></i>
            <i title="删除" class="iconfont icon-shanchu"></i>
            <i title="复制" class="iconfont icon-fuzhi"></i>
            <i title="修改背景颜色" class="iconfont  icon-beijingyanse" @click.prevent.stop="open"></i>
            <i title="上移一层" class="iconfont icon-shangyi" @click.prevent.stop="setZIndexCurComponent('+')"></i>
            <i title="上移一层" class="iconfont icon-xiayi" @click.prevent.stop="setZIndexCurComponent('-')"></i>
            <slot name="img-html"></slot>
            <slot name="plugin-html"></slot>
            <slot name="text-html"></slot>
        </div>
        <input type="color" id="color" value="" @change="changeColor" hidden>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
	name: 'baseMenu',
	data() {
		return {
			isMenu: true,
		};
	},
	methods: {
		...mapMutations('base-menu', ['setZIndexCurComponent', 'setBGCCurComponent']),
		hideMenu(event) {
			let style = event.target.parentElement.style;
			if (style.getPropertyValue('height') === 'auto') {
				style.setProperty('height', '30px');
			} else {
				style.setProperty('height', 'auto');
			}
			this.isMenu = !this.isMenu;
		},
		open() {
			let dom = document.getElementById('color');
			dom.click();
		},
		changeColor(value) {
			this.setBGCCurComponent(value.target.value);
		},
	},
};
</script>
<style lang="less" scoped>
.vs-menu {
	width: 25px;
	text-align: center;
	position: absolute;
	top: 0;
	right: -35px;
	overflow: hidden;
	z-index: 10000;
	.iconfont {
		display: inline-block;
		width: 25px;
		height: 25px;
		line-height: 25px;
		border-radius: 2px;
		margin: 0 auto;
		margin-bottom: 5px;
		background-color: rgba(71, 89, 119, 0.8);
		cursor: pointer;
		font-size: 14px;
		&:first-child {
			border-radius: 50%;
		}
	}
	#color {
		top: 0;
		right: -35px;
		z-index: 10001;
		display: inline-block;
	}
}
</style>