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

app.use(
    createProxyMiddleware({
      target: 'http://kythuatvov.vn:8080',
      changeOrigin: true,
    }),
);

app.listen(3000, () => {
    console.info('proxy server is running on port 8088')
})
