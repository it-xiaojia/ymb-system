const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 38888
  },
  //关闭eslint报错和警告
  lintOnSave: false
})
