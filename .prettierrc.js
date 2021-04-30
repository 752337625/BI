module.exports = {
	printWidth: 140, //140换行
	tabWidth: 4, //缩进
	useTabs: true, //使用tabs缩进
	semi: true, // true末尾加尾号
	singleQuote: true, // true单引号
	quoteProps: 'as-needed',
	jsxSingleQuote: false, //jsx设置
	trailingComma: 'all', // 行尾逗号,默认none,可选 none|es5|all  all 包括函数对象等所有可选
	bracketSpacing: true, //对象中的空格true: { foo: bar } false: {foo: bar}
	jsxBracketSameLine: false, //jsx设置
	arrowParens: 'avoid', //avoid 能省略括号的时候就省略 例如x => x  always 总是有括号
	htmlWhitespaceSensitivity: 'ignore',
	vueIndentScriptAndStyle: true, // true：script、style标签缩进
	endOfLine: 'lf',
	parsers: {
		'.jsx': 'flow',
		'.scss': 'scss',
		'.ts': 'typescript',
		'.less': 'css',
		'.vue': 'vue',
		'.yml': 'yaml',
		'.foo': 'flow', //文件后缀名对应的格式化处理器
		'.js': 'js',
		'.html': 'html',
	},
};
