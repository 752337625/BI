const defaultNum = {
	width: '500px',
	height: '500px',
	left: '0',
	top: '0',
	zIndex: 1,
	//rotate: 0,
	//fontSize: '14px',
	//borderWidth: '0',
	//letterSpacing: '0',
	//borderRadius: '0',
	//magin: '0',
};
const defaultStr = {
	//borderStyle: 'solid',
	//borderColor: '#ccc',
};
export default class Style {
	constructor(num = defaultNum, str = defaultStr) {
		Object.keys(num).forEach(i => {
			this[i] = num[i];
		});
		Object.keys(str).forEach(i => {
			this[i] = str[i];
		});
	}
}
