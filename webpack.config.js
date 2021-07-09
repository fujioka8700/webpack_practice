const path = require('path');

module.exports = {
	// モード
	mode: 'development',
	// エントリーポイント
	entry: './src/hello2.js',
	// 出力するファイル
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};