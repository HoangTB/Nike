const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const UserRouter = require('./routers/user.router');
const ProductRouter = require('./routers/product.router');
const ImageRouter = require('./routers/image.router');
const orderDetailRouter = require('./routers/orderDetail.router');
const orderRouter = require('./routers/order.router');
const historyRouter = require('./routers/history.router');

//Middleware
const corsOrigin = ['https://nike-beta.vercel.app', 'https://nike-me4o.vercel.app'];
app.use(express.urlencoded()); // Biên dịch url
app.use(bodyParser.json()); // Lấy Body
app.use(morgan('dev')); // Logger error
// app.use(helmet()); //
app.use(cors()); // Chia sẻ tài nguyên giữa client and server
//Database
const corsOptions = {
  origin: corsOrigin,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
//doc static

app.use(express.static(path.join(__dirname, '../../public')));

//Router
app.use('/api/v1/users', UserRouter);
app.use('/api/v1/products', ProductRouter);
app.use('/api/v1/images', ImageRouter);
app.use('/api/v1/order', orderRouter);
app.use('/api/v1/order-detail', orderDetailRouter);
app.use('/api/v1/history', historyRouter);

//Handle Error

module.exports = app;
