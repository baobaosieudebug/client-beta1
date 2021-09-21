module.exports = {
  devServer: {
      port: 8080
  },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/client-beta/' // Thay tên repository của các bạn vào đây nhé
        : '/'
}