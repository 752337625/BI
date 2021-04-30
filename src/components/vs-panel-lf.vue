<template>
	<div class="vs-panel-lf">
		<aside class="vs-panel-heading">
			<span class="fl">图册页({{ count }})</span>
			<i class="el-icon-plus fr" @click="addList"></i>
		</aside>
		<base-scrollbar>
			<article class="vs-panel-body">
				<!-- list-group-width ui-sortable -->
				<div class="list-group">
					<ul>
						<div v-for="(item, index) in navList" :key="item" class="vs-scope" @click="clickNode">
							<span class="span-index">{{ index + 1 }}</span>
							&nbsp;
							<li :class="[item == activeIndex ? 'active' : '']"></li>
						</div>
					</ul>
				</div>
			</article>
		</base-scrollbar>
	</div>
</template>
<script>
	export default {
		name: 'vs-panel-lf',
		data() {
			return {
				count: 1,
				activeIndex: 1,
				navList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
				//navList: [1, 2],
			};
		},
		components: {
			'base-scrollbar': () => import('@/base/base-scrollbar'),
		},
		methods: {
			addList() {},
			clickNode(e){
				console.log(e)
			}
		},
	};
</script>

<style lang="less" scoped="scoped">
	.vs-panel-lf {
		min-width: 180px;
		height: 100%;
		.vs-panel-heading {
			height: 30px;
			padding: 0 10px;
			background-color: #dae4ec;
			line-height: 30px;
			font-size: 12px !important;
			color: #44536d !important;
		}

		.el-icon-plus {
			line-height: 30px;
			cursor: pointer;
		}

		.vs-panel-body {
			width: auto;
			//height: calc(100% - 30px);
			padding-top: 0;
			background-color: #f1f5f8;

			ul {
				.vs-scope {
					padding-left: 10px;

					&:hover {
						background-color: #d2dee8;
					}
				}

				.span-index {
					display: inline-block;
					line-height: 86px;
					vertical-align: top;
					margin: 10px 0;
					font-size: 12px;
					text-align: right;
					color: #44536d;
				}

				li {
					display: inline-block;
					margin: 10px 0;
					width: 136px;
					height: 86px;
					text-decoration: none;
					background-color: #fff;
					box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
				}
			}
		}
	}
</style>
