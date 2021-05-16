<template>
    <div class="vs-menu">
        <div>
            <p><i class="iconfont icon-jiahao"></i></p>
            <p><i class="iconfont icon-copy"></i></p>
            <slot name="imgComponent"></slot>
            <slot name="pluginComponent"></slot>
            <slot name="textComponent"></slot>
        </div>
    </div>
</template>
<script>
export default {
	name: 'baseMenu',
};
</script>
<style lang="less" scoped>
.vs-menu {
	position: absolute;
	top: 0;
	right: 0;
}
</style>