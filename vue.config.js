const path = require('path');

module.exports = {
  // Configurações do @vue/cli-service
  transpileDependencies: true,

  // Configurações personalizadas
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
};
