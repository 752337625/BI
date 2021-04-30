class eventPolyFill {
	static addELPF(element, type, callback) {
		if (element.addEventListener) {
			element.addEventListener(type, callback, false);
		} else if (element.attachEvent) {
			//兼容IE
			element.attachEvent('on' + type, callback);
		}
	}
	static removeELPF(element, type, callback) {
		if (element.removeEventListener) {
			element.removeEventListener(type, callback);
		} else if (element.attachEvent) {
			//兼容IE
			element.detachEvent('on' + type, callback);
		}
	}
	static getEventPosition(e) {
		let { offsetX, offsetY, clientX, clientY, screenX, screenY, pageX, pageY } = e;
		return { offsetX, offsetY, clientX, clientY, screenX, screenY, pageX, pageY };
	}
	static getDocPosition(element) {
		let getBound = document.querySelector(element).getBoundingClientRect();
		return getBound;
	}
}
export default eventPolyFill;
