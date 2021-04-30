import regExp from '@/utiles/regExp';
import eventPolyFill from '@/utiles/eventPolyfill.js';
/**
 * @description  根据Point移动修改位置和shape的大小
 * @Date 2021/4/25
 *
 */
const fus = {
	lt: calculateLeftTop,
	rt: calculateRightTop,
	rb: calculateRightBottom,
	lb: calculateLeftBottom,
	t: calculateTop,
	r: calculateRight,
	b: calculateBottom,
	l: calculateLeft,
};
/**
 * @param {*} style
 * @param {*} startXY
 * @param {*} curXY
 * @param {*} shapeXY
 * @param {*} docXY
 * @description 上中设置：高度、top
 */
function calculateTop(style, startXY, curXY, shapeXY, docXY) {
	let height = shapeXY.bottom - curXY.clientY;
	let top = curXY.clientY - docXY.top;
	if (height > 0) {
		style.height = height + 'px';
		style.top = top + 'px';
	}
}
/**
 * @param {*} style
 * @param {*} startXY
 * @param {*} curXY
 * @param {*} shapeXY
 * @param {*} docXY
 * @description 右中设置：宽度
 */
function calculateRight(style, startXY, curXY, shapeXY, docXY) {
	let curComponentLeft = +regExp.getNumberFn(style.left);
	let width = curXY.clientX - docXY.left - curComponentLeft;
	if (width > 0) {
		style.width = width + 'px';
	}
}
/**
 *
 * @param {*} style
 * @param {*} startXY
 * @param {*} curXY
 * @param {*} shapeXY
 * @param {*} docXY
 * @description 低中设置：高度
 */
function calculateBottom(style, startXY, curXY, shapeXY, docXY) {
	let curComponentTop = +regExp.getNumberFn(style.top);
	let height = curXY.clientY - docXY.top - curComponentTop;
	if (height > 0) {
		style.height = height + 'px';
	}
}
/**
 *
 * @param {*} style
 * @param {*} startXY
 * @param {*} curXY
 * @param {*} shapeXY
 * @param {*} docXY
 * @description 左中设置：宽度、left
 */
function calculateLeft(style, startXY, curXY, shapeXY, docXY) {
	let width = shapeXY.right - curXY.clientX;
	let left = curXY.clientX - docXY.left;
	if (width > 0 && left > 0) {
		style.width = width + 'px';
		style.left = left + 'px';
	}
}
/**
 * @param {*} style
 * @param {*} startXY
 * @param {*} curXY
 * @param {*} shapeXY
 * @param {*} docXY
 * @description 左上设置：宽度、高度、top、left
 */
function calculateLeftTop(style, startXY, curXY, shapeXY, docXY) {
	let width = shapeXY.right - curXY.clientX;
	let height = shapeXY.bottom - curXY.clientY;
	let top = curXY.clientY - docXY.top;
	let left = curXY.clientX - docXY.left;
	if (width > 0 && height > 0) {
		style.width = width + 'px';
		style.height = height + 'px';
		style.top = top + 'px';
		style.left = left + 'px';
	}
}

/**
 * @param {*} style
 * @param {*} startXY
 * @param {*} curXY
 * @param {*} shapeXY
 * @param {*} docXY
 * @description  右上设置：宽度、高度、top
 */
function calculateRightTop(style, startXY, curXY, shapeXY, docXY) {
	let curComponentLeft = +regExp.getNumberFn(style.left);
	let width = curXY.clientX - docXY.left - curComponentLeft;
	let top = curXY.clientY - docXY.top;
	let height = shapeXY.bottom - curXY.clientY;
	if (width > 0 && height > 0) {
		style.top = top + 'px';
		style.width = width + 'px';
		style.height = height + 'px';
	}
}
/**
 * @param {*} style
 * @param {*} startXY
 * @param {*} curXY
 * @param {*} shapeXY
 * @param {*} docXY
 * @description    左下设置：宽度、高度、left
 */
function calculateLeftBottom(style, startXY, curXY, shapeXY, docXY) {
	let curComponentTop = +regExp.getNumberFn(style.top);
	let width = shapeXY.right - curXY.clientX;
	let height = curXY.clientY - docXY.top - curComponentTop;
	let left = curXY.clientX - docXY.left;
	if (width > 0 && height > 0) {
		style.width = width + 'px';
		style.height = height + 'px';
		style.left = left + 'px';
	}
}
/**
 * @param {*} style
 * @param {*} startXY
 * @param {*} curXY
 * @param {*} shapeXY
 * @param {*} docXY
 * @description 右下设置：宽度、高度
 */
function calculateRightBottom(style, startXY, curXY, shapeXY, docXY) {
	let curComponentTop = +regExp.getNumberFn(style.top);
	let curComponentLeft = +regExp.getNumberFn(style.left);
	let width = curXY.clientX - docXY.left - curComponentLeft;
	let height = curXY.clientY - docXY.top - curComponentTop;
	if (width > 0 && height > 0) {
		style.width = width + 'px';
		style.height = height + 'px';
	}
}
export default function setPointAndshapeSize(point, style, startXY, curXY, shapeXY, docXY) {
	fus[point](style, startXY, curXY, shapeXY, docXY);
}
