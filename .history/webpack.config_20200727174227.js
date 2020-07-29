module.exports = {
  entry: './app/app.ts',
  devtool: 'inline-source-map',
  module: {
    
  }
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    inline: false
  }
};
