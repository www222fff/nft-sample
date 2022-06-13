const Koa = require('koa');
const serve = require('koa-static');
const router = require('./router.js');

const app = new Koa();

app
  .use(serve('./images'))
  .use(router.routes());

app.listen(process.env.PORT || 3000, '0.0.0.0', function () {                                                                                                             
    console.log("Server started.......");                                                              
    }             
);
