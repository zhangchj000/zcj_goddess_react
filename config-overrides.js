// 定义加载配置的 js 模块: config-overrides.js
const {override, fixBabelImports,addLessLoader} = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'true',
    }),
    addLessLoader({
        javascriptEnabled:true,
        modifyVars:{'@primary-color':'#1DA57A'}
    })
);