<template>
    <div class="vs-toolbar">
        <!-- <ul class="fl">
			<li>
				<i>offsetX</i>
				<span>{{eventPosition.offsetX}}</span>
			</li>
			<li>
				<i>offsetY</i>
					<span>{{eventPosition.offsetY}}</span>
			</li>
			<li>
				<i>clientX</i>
					<span>{{eventPosition.clientX}}</span>
			</li>
			<li>
				<i>clientY</i>
				<span>{{eventPosition.clientY}}</span>
			</li>
			<li>
				<i>screenX</i>
				<span>{{eventPosition.screenX}}</span>
			</li>
			<li>
				<i>screenY</i>
				<span>{{eventPosition.screenY}}</span>
			</li>
			<li>
				<i>pageX</i>
					<span>{{eventPosition.pageX}}</span>
			</li>
			<li>
				<i>pageY</i>
					<span>{{eventPosition.pageY}}</span>
			</li>
		</ul> -->
        <ul class="fr">
            <li @click="setPushComponentData">
                <i class="el-icon-plus"></i>
                <span>添加资源框</span>
            </li>
            <!-- <li>
				<i class="el-icon-refresh-right"></i>
				<span>刷新</span>
			</li> -->
            <li @click="popRevoke">
                <i class="el-icon-plus"></i>
                <span>撤销</span>
            </li>
            <li @click="popRedo">
                <i class="el-icon-plus"></i>
                <span>重做</span>
            </li>
            <!-- <li>
				<i class="el-icon-video-play"></i>
				<span>预览</span>
			</li>
			<li>
				<i class="el-icon-plus"></i>
				<span>保存</span>
			</li>
			<li>
				<i class="el-icon-plus"></i>
				<span>分享</span>
			</li>
			<li>
				<i class="el-icon-plus"></i>
				<span>导出</span>
			</li>
			<li>
				<i class="el-icon-plus"></i>
				<span>数据</span>
			</li>
			<li>
				<i class="el-icon-folder"></i>
				<span>媒体库</span>
			</li>
			<li>
				<i class="el-icon-plus"></i>
				<span>联动设置</span>
			</li>
			<li>
				<i class="el-icon-back"></i>
				<span>返回</span>
			</li>
			<li>
				<i :class="[unfold ? 'el-icon-s-unfold' : 'el-icon-monitor']"></i>
				<span>显示右侧面板</span>
			</li> -->
        </ul>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
	name: 'vs-toolbar',
	data() {
		return {
			unfold: false,
		};
	},
	methods: {
		...mapMutations('toolbar', ['popRevoke', 'setPushComponentData', 'popRedo']),
	},
};
</script>

<style lang="less" scoped="scoped">
.vs-toolbar {
	height: 39px;
	line-height: 39px;
	color: #b4c6d6;
	background-color: #293750;

	li {
		padding-left: 10px;
		padding-right: 10px;
		float: left;

		span {
			padding-left: 5px;
		}

		&:hover,
		&:focus {
			color: #fff;
			background-color: rgba(0, 0, 0, 0.2);
		}
	}
}
</style>
