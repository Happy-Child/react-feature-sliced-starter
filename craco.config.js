const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@/app': path.resolve(__dirname, './src/app'),
      '@/processes': path.resolve(__dirname, './src/processes'),
      '@/pages': path.resolve(__dirname, './src/pages'),
      '@/widgets': path.resolve(__dirname, './src/widgets'),
      '@/features': path.resolve(__dirname, './src/features'),
      '@/entities': path.resolve(__dirname, './src/entities'),
      '@/shared': path.resolve(__dirname, './src/shared'),
    },
  },
};
