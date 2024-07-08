const express = require('express')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()
app.use(cors({
    origin: [
        'http://localhost:*',
        'https://h5.zdn.vn',
        'zbrowser://h5.zdn.vn'
    ],
}))
app.use('/live/*',
    createProxyMiddleware({
      target: `http://media.kythuatvov.vn:1936/live/${req.path.substring(2)}`,
      changeOrigin: true,
    }),
);

app.use(
    createProxyMiddleware({
      target: 'http://kythuatvov.vn:8080',
      changeOrigin: true,
    }),
);

app.listen(3000, () => {
    console.info('proxy server is running on port 8088')
})
