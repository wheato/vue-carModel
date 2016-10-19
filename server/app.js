"use strict";

const http = require('http');
const request = require('request');
const url = require('url');
const querystring = require('querystring');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');

var fetchListData = function (num, cb){
  num = num || 1;
  let api = `http://club.autohome.com.cn/JingXuan/1/${num}`;
  console.log(api);

  //request data from autohome
  request.get({
    url: api,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2725.0 Safari/537.36'
    },
    gzip: true,
    encoding: null
  }, (err, res, body) => {
    let resData = {
      list: [],
      total: 0,
      current: num
    };
    body = iconv.decode(body, 'GBK');
    const $ = cheerio.load(body);
    let list = $('.wrap').find('.content').find('li');

    //遍历列表
    list.each(function(){
      let item = {
        'title': $(this).find('p').find('a').text(),
        'link': $(this).find('p').find('a').attr('href'),
        'classify': $(this).find('.font12NoLine').find('a').text(),
        'cover': $(this).find('.pic_txt').find('img').attr('src')
      };
      resData.list.push(item);
    });

    //加入页数
    resData.total = ($('.gopage').find('.fs').attr('title').match(/(\d)+/))[0];

    cb && cb(resData);
  })
};

var fetchDetailData = function (url, cb) {
  console.log(url);
  request.get({
    uri: url,
    gzip: true,
    encoding: null
  }, (err, res, body) => {

    let postData = {
      images: [],
      title: '',
      src_link: url
    };
    body = iconv.decode(body, 'GBK');
    const $ = cheerio.load(body);
    //Get image list
    const images = $('#F0').find('.conright').find('.conttxt').find('.pic');
    //Get post title
    const title = $('.maxtitle').text();

    images.each(function(){
      let image = $(this).find('img');
      let item;
      if(image.attr('src9')){
        item = image.attr('src9');
      } else {
        item = image.attr('src');
      }
      postData.images.push(item)
    });

    postData.title = title;
    cb && cb(postData);
  });
};

var router = function (req, res){
  const req_url = url.parse(req.url);
  const pathname = req_url.pathname;
  const query = querystring.parse(req_url.query);

  console.log('request:: ' + pathname + '    query:: ');

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  switch (pathname){
    case '/list':
      fetchListData(query.num, (data) => {
        console.log('================ write list data ================');
        res.write(JSON.stringify(data));
        res.end()
      });
      break;

    case '/detail':
      var link = decodeURIComponent(query.link);
      fetchDetailData(link, (data) => {
        console.log('================ write detail data ================');
        res.write(JSON.stringify(data));
        res.end()
      });
      break;

    default:
      res.write('Hello Vue');
      res.end()
  }

};

const server = http.createServer(router).listen(8787);

console.log('App server run on localhost:8787');
