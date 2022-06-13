const Koa = require('koa');
const cors = require('@koa/cors');
const serve = require('koa-static');
const router = require('./router.js');
const path = require('path');

const app = new Koa();

app
  .use(cors())
  .use(serve(path.join(__dirname,'./images')))
  .use(router.routes())
  .use( async (ctx) => {
   ctx.body = 'hello world'
});


app.listen(process.env.PORT || 3000, '0.0.0.0', function () {                                                                                                             
    console.log("Server started.......");                                                              
    }             
);
