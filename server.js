const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()



app.prepare().then(() => {
  const server = express()
  const config = require("./config/config");

  server.use(express.urlencoded({ extended: false }));
  server.set("view engine", "ejs");

  server.use(express.static(__dirname + "/public"));

  server.use('/', require('./routes/index'));
  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.all("*", async (req, res, next) => {
    try {
      let err = new Error("چنین صفحه‌ای یافت نشد.");
      err.status = 404;
      throw err;
    } catch (err) {
      next(err);
    }
  });
  
  //
  server.use((err, req, res, next) => {
    const code = err.status || 500;
    const message = err.message || ".خطایی سمت سرور رخ داده است";
    const stack = err.stack || "";
  
    if (process.env.DEBUG) {
      return res.render("errors/developer", { message, stack });
    } else {
      return res.render(`errors/${code}`, { message });
    }
  });
  
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})
