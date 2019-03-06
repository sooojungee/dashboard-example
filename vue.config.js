module.exports = {
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    proxy: 'http://https://sooojungee.github.io/',
  },
  baseUrl: '/dashboard',
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
};