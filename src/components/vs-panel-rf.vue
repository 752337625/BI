<template>
    <div class="vs-panel-rf">
        <el-tabs v-model="activeName">
            <el-tab-pane label="电脑布局" name="first">
                <el-radio-group v-model="computerLayout">
                    <el-radio :label="1">自适应</el-radio>
                    <el-radio :label="2">固定分辨率</el-radio>
                </el-radio-group>
            </el-tab-pane>
            <el-tab-pane label="移动布局" name="second"></el-tab-pane>
            <el-tab-pane label="播放设置" name="third"></el-tab-pane>
            <el-tab-pane label="系统主题" name="fourth"></el-tab-pane>
            <el-tab-pane label="自定义" name="five"></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
	data() {
		return {
			activeName: 'second',
			computerLayout: '',
		};
	},
	methods: {},
};
</script>

<style lang="less" scoped="scoped">
.vs-panel-rf {
	min-width: 200px;
	height: 100%;
}
</style>
