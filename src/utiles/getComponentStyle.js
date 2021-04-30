/**
 * @description  根据数据设置Components的内敛样式。例如大小，位置，边框，内边距，外边距等
 * @author whw
 * @time 2021/4/11
 */

/**
 * @desc：并不是所有的样式需要ComponentStyle去内敛设置例如 ：位置top，left等，旋转角度。所以需要过滤一些元素
 * 过滤后的属性就是我们Components需要的属性
 * @param {Object} style
 * @param {Array}  filter
 * @time 2021/4/11
 *
 */
function getComponentStyle(style = {}, filter = ['top', 'left', 'rotate']) {
	return getStyle(style, filter);
}

function getStyle(style = {}, filter = ['top', 'left', 'rotate']) {
	const result = {};
	Object.keys(style).forEach(key => {
		if (!filter.includes(key)) {
			result[key] = style[key];
		}
	});
	return result;
}
export default getComponentStyle;
