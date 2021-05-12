/**
 *
 * @param {*} target
 * @returns
 * 深考只能拷拷贝对象，数组，基本类型
 */
export function deepClone(target) {
	if (typeof target == 'object') {
		const result = Array.isArray(target) ? [] : {};
		for (const key in target) {
			if (typeof target[key] == 'object') {
				result[key] = deepClone(target[key]);
			} else {
				result[key] = target[key];
			}
		}

		return result;
	}
	return target;
}
/**
 * @desc 函数防抖:所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 * this:值当前防抖函数下的this，不是func。例如 application.vue onSubmit下的this，
 * args：是绑定函数的参数。例如 application.vue onSubmit(5)下的argument 中有5
 */
 export function _debounce(func, wait = 500, immediate = true) {
	var timeout;
	return function () {
		let context = this;
		let args = arguments;
		if (timeout) clearTimeout(timeout);
		if (immediate) {
			let callNow = !timeout;
			timeout = setTimeout(() => {
				timeout = null;
			}, wait);
			if (callNow) func.apply(context, args);
		} else {
			timeout = setTimeout(function () {
				func.apply(context, args);
			}, wait);
		}
	};
}
/**
 * @desc 函数节流：所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 * this:值当前防抖函数下的this，不是func。例如 application.vue onSubmit下的this，
 * args：是绑定函数的参数。例如 application.vue onSubmit(5)下的argument 中有5
 * 
 */
 export function _throttle(func, wait = 500, type = 1) {
	if (type === 1) {
		var previous = 0;
	} else if (type === 2) {
		var timeout;
	}
	return function () {
		let context = this;
		let args = arguments;
		if (type === 1) {
			let now = Date.now();
			if (now - previous > wait) {
				func.apply(context, args);
				previous = now;
			}
		} else if (type === 2) {
			if (!timeout) {
				timeout = setTimeout(() => {
					timeout = null;
					func.apply(context, args);
				}, wait);
			}
		}
	};
}
