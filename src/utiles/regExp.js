const regExp = {
	getNumber: /^(\-|\d)*.?(\d+)/g, //开头时数字匹配最少一个最多20个
	getNumberFn(word) {
		return +word.match(this.getNumber)[0];
	},
	isNumber: /\d/,
	isNumberFn(word) {
		return this.isNumber.test(word);
	},
};

export default regExp;
