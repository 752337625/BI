/*设置Shape组件的位置 */

/**
 * @description  设置Shape组件的位置top，left，旋转角度ratate等
 * @author whw
 * @time 2021/4/11
 */
/**
 * @param {Object} style
 * @time 2021/4/11
 */
function getShapeStyle(style) {
	const result = {};
	['top', 'left', 'rotate', 'width', 'height'].forEach(attr => {
		if (attr !== 'rotate') {
			result[attr] = style[attr];
		} else {
			result.transform = 'rotate(' + style[attr] + 'deg)';
		}
	});
	return result;
}

export default getShapeStyle;
