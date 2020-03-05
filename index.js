const _ = require('koa-route');
const Koa = require('koa');
const cheerio = require('cheerio');
const axios = require('axios');
const cors = require('@koa/cors');

const app = new Koa();

app
  .use(cors({ origin: 'pano.tw' }))
  .use(_.get('/:id', async (ctx, id) => {
    const response = await axios.get(`https://imgur.com/gallery/${id}`);
    const $ = cheerio.load(response.data);

    ctx.body = {
      type: $('meta[property="og:type"]').attr('content'),
      video: $('meta[property="og:video"]').attr('content'),
      image: $('link[rel="image_src"]').attr('href'),
    };
  }))
  .listen(3000);
