const { config } = require("@swc/core/spack");

module.exports = config({
  //入口文件
  entry: __dirname + "/input.js",
  //输出
  output: {
    path: __dirname + "/dist",
  },
  // swc编译配置
  options:{
    jsc: {
        //解析配置
        parser: {
          syntax: "typescript", //输入文件格式
          tsx: false,    // 是否支持tsx
          dynamicImport: false, //是否支持动态导入
          decorators: false, //是否支持装饰器
        },
        transform: null,
        target: "es5", //转译目标
        loose: false, 
        externalHelpers: false,
        keepClassNames: false
      },
      // 输出文件配置
      module: {
          type: "commonjs",  
          strict: false,
          strictMode: false,
          lazy: false,
          noInterop: false,
          ignoreDynamic: false
        }
  }
});
