module.exports = {
    entry: './first.ts',
    mode: 'development',
    module: {
        rules: [
          { test: /\.ts$/, use: 'ts-loader' }
        ]
      }
}