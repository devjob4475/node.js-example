const express = require("express");
const app = express();
const axios = require('axios');
require('dotenv').config();

app.use(express.json());

const bookRouter = require('./routes/book.router');
app.use("/api/v1/books", bookRouter);

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://inwiptv.com/Ajax_list.php?id=live&fid=4&type=1&Cookie=cuser=joft70302; cpass=123456789; PHPSESSID=e71d9671300f6c0773da7f3e754e6716; __cflb=02DiuJFQwB4GELYEJyxVz6Cd7qouHJm1mE2CTpuwqQP6K',
  headers: { 
    'Cookie': 'PHPSESSID=df7170500b7ca6b33a6b3433f5e87439; __cflb=0H28vwuuPYDN6Z6M5v83LgEY2qZJRyXtGjCYfQkqKcX'
  }
};

const fetchApiData = () => {
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.error(error);
  });
};

// Fetch the API every 2 seconds
setInterval(fetchApiData, 2000);


let config2 = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://r3-sn-5fo-c37ed1.googleuservideo.com/dooflix_x2/truepremierhd1/chunks.m3u8?nimblesessionid=2579499&wmsAuthSign=c2VydmVyX3RpbWU9MDYvMTEvMjAyNCAwNDo1Mjo0NCBQTSZoYXNoX3ZhbHVlPXNvWmlKd2pXL2NHdCt4ay9OeGNsNnc9PSZ2YWxpZG1pbnV0ZXM9NSZzdHJtX2xlbj0xMCZpZD13ZWItOTY2NzU=',
  headers: { }
};

const fetchApiData2 = () => {
    axios.request(config2)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  };


setInterval(fetchApiData2, 2000);
