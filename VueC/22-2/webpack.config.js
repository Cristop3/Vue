module.exports = {
    //入口文件
    entrys:'./main.js',

    //输出口
    output:{
        path:__dirname,
        filename:'boundle.js' //打包文件
    },

    //webpack最核心的在于配置
    module:{
        //加载项目中需要的各种loader模块
        loaders:[
            //加载vue-loader
            {test: /\.vue$/,loader:'vue'},
        ]
    },

    //配置ES6
    babel:{
        presets:['es2015'],
        plugins:['transform-runtime']
    }
}