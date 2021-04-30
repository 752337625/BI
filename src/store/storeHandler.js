const path = require('path');
const files = require.context('./modules', true, /\.vuex\.js$/);
const modules = {};
files.keys().forEach(key => {
	const name = path.basename(key, '.vuex.js');
	modules[name] = files(key).default || files(key);
});
export default modules;
