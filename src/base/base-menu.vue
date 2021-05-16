<template>
    <div class="vs-menu" style="height:auto">
        <div>
            <p title="隐藏" @click="hideMenu"> <i class="iconfont icon-jiahao1"></i></p>
            <p title="删除"><i class="iconfont icon-shanchu"></i></p>
            <p title="复制"><i class="iconfont icon-fuzhi"></i></p>
            <p title="清除"><i class="iconfont icon-qingchu"></i></p>
            <p title="上移一层"><i class="iconfont icon-shangyi"></i></p>
            <p title="上移一层"><i class="iconfont icon-xiayi"></i></p>
            <slot name="imgComponent"></slot>
            <slot name="pluginComponent"></slot>
            <slot name="textComponent"></slot>
        </div>
    </div>
</template>
<script>
export default {
	name: 'baseMenu',
	methods: {
		hideMenu() {
			let menu = document.getElementsByClassName('vs-menu')[0];
			let style = menu.style;
			if (style.getPropertyValue('height') === 'auto') {
				style.setProperty('height', '30px');
			} else {
				style.setProperty('height', 'auto');
			}
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
	transition-property: all;
	transition-duration: 5ms;
	transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
	p {
		width: 25px;
		height: 25px;
		line-height: 25px;
		border-radius: 2px;
		margin: 0 auto;
		margin-bottom: 5px;
		background-color: rgba(71, 89, 119, 0.8);
		cursor: pointer;
		.iconfont {
			font-size: 14px;
		}
		&:first-child {
			border-radius: 50%;
		}
	}
}
</style>