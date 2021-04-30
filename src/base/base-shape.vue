<template>
    <!-- //阻止默认行为防止在移动的过程中选中文字，同时阻止事件冒泡 -->
    <div class="vs-shape" :class="{ active }" @mousedown.stop.prevent="handleMouseDownOnShape" draggable="true">
        <div v-for="item in active ? pointList : []" :key="item" :class="['vs-shape-point', item]" @mousedown.stop.prevent="handleMouseDownOnPoint(item, $event)" :style="getPointStyle(item)"></div>
        <slot></slot>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
import eventPolyFill from '@/utiles/eventPolyfill';
import regExp from '@/utiles/regExp';
import setPointAndshapeSize from '@/utiles/setPointAndshapeSize';
export default {
	name: 'base-shape',
	props: {
		active: {
			type: Boolean,
			default: false,
			require: false,
		},
		element: {
			require: true,
			type: Object,
		},
		defaultStyle: {
			require: true,
			type: Object,
		},
		index: {
			require: true,
			type: [Number, String],
		},
	},
	data() {
		return {
			pointList: Object.freeze(['lt', 't', 'rt', 'r', 'rb', 'b', 'lb', 'l']),
			cursors: Object.freeze({
				lt: 'nw-resize',
				t: 'n-resize',
				rt: 'ne-resize',
				r: 'e-resize',
				rb: 'se-resize',
				b: 's-resize',
				lb: 'sw-resize',
				l: 'w-resize',
			}),
		};
	},
	methods: {
		...mapMutations(['setCurComponent', 'setShapeStyle', 'setRevoke']),
		/**
		 * 设置当前点击组件，设置组件移动top left
		 * 取消默认行为，以及冒泡
		 */
		handleMouseDownOnShape(e) {
			this.setCurComponent({ component: this.element, index: this.index });
			let startY = e.clientY;
			let startX = e.clientX;
			let style = { ...this.defaultStyle };
			let curComponentTop = regExp.getNumberFn(style.top);
			let curComponentLeft = regExp.getNumberFn(style.left);
			// 如果元素没有移动，则不保存快照
			let hasMove = false;
			let move = me => {
				hasMove = true;
				let curX = me.clientX;
				let curY = me.clientY;
				let top = curY - startY + curComponentTop;
				let left = curX - startX + curComponentLeft;
				if (left >= 0 && top >= 0) {
					style.top = top + 'px';
					style.left = left + 'px';
					this.setShapeStyle(style);
				}
			};
			let up = () => {
				hasMove && this.setRevoke();
				eventPolyFill.removeELPF(document, 'mousemove', move);
				eventPolyFill.removeELPF(document, 'mouseup', up);
			};
			eventPolyFill.addELPF(document, 'mousemove', move);
			eventPolyFill.addELPF(document, 'mouseup', up);
		},
		/**
		 * 元素四角缩放
		 */
		handleMouseDownOnPoint(point, e) {
			let style = {
				...this.defaultStyle,
			};
			//第一次点击时也会触发 move，所以会有“刚点击组件但未移动，组件的大小却改变了”的情况发生，因此第一次点击时不触发 move 事件
			let isFirst = false;
			// 是否需要保存快照
			let needSave = false;
			//获取当前点击的位置的定位属性
			let startXY = eventPolyFill.getEventPosition(e);
			//获取当前vs-shape的docPosition
			let shapeXY = eventPolyFill.getDocPosition('.vs-shape');
			//获取当前#vs-panel-body的docPosition
			let docXY = eventPolyFill.getDocPosition('#vs-panel-body');
			let move = me => {
				let curXY = eventPolyFill.getEventPosition(me);
				if (!isFirst && Math.abs(startXY.clientY - curXY.clientY) > 1) {
					isFirst = true;
					return;
				}
				//移动才进行快照
				needSave = true;
				//获取移动过程中定位属性
				setPointAndshapeSize(point, style, startXY, curXY, shapeXY, docXY);
				//修改当前组件样式
				this.setShapeStyle(style);
			};
			let up = () => {
				//缩放元素进行快照
				if (needSave) this.setRevoke();
				eventPolyFill.removeELPF(document, 'mousemove', move);
				eventPolyFill.removeELPF(document, 'mouseup', up);
			};
			eventPolyFill.addELPF(document, 'mousemove', move);
			eventPolyFill.addELPF(document, 'mouseup', up);
		},
		/**
		 * 四角定位，手势
		 */
		getPointStyle(point) {
			//['lt', 't', 'rt', 'r', 'rb', 'b', 'lb', 'l']
			let { width = '0px', height = '0px' } = this.defaultStyle;
			let hasL = /l/.test(point);
			let hasR = /r/.test(point);
			let hasT = /t/.test(point);
			let hasB = /b/.test(point);
			let newLeft = null;
			let newTop = null;
			if (point.length === 2) {
				newLeft = hasL ? 0 : width;
				newTop = hasT ? 0 : height;
			} else {
				let widthNumber = regExp.getNumberFn(width);
				let heightNumber = regExp.getNumberFn(height);
				// 上下两点的点，宽度居中
				if (hasT || hasB) {
					newLeft = Math.floor(widthNumber / 2) + 'px';
					newTop = hasT ? '0px' : heightNumber + 'px';
				}
				// 左右两边的点，高度居中
				if (hasL || hasR) {
					newLeft = hasL ? '0px' : widthNumber + 'px';
					newTop = Math.floor(heightNumber / 2) + 'px';
				}
			}

			let style = {
				marginLeft: hasR ? '-4.5px' : '-4.5px',
				marginTop: '-4.5px',
				left: `${newLeft}`,
				top: `${newTop}`,
				cursor: this.cursors[point],
			};
			return style;
		},
	},
};
</script>

<style lang="less" scoped="scoped">
.vs-shape {
	position: absolute;
	cursor: move;
	border: 0.5px solid #ccc;
	.vs-shape-point {
		position: absolute;
		background: #fff;
		background-color: #84b5eb;
		width: 9px;
		height: 9px;
		z-index: 1;
	}

	&:hover {
		border-color: #84b5eb;
	}
}
</style>
