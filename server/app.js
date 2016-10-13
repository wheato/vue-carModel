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
    let resData = [];
    body = iconv.decode(body, 'GBK');
    const $ = cheerio.load(body);
    let list = $('.wrap').find('.content').find('li');

    //遍历列表
    list.each(function(){
      let item = {
        'title': $(this).find('p').find('a').text(),
        'link': $(this).find('p').find('a').attr('href'),
        'classify': $(this).find('.font12NoLine').find('a').text(),
        // 'views': $(this).find('.read'),
        // 'comment_num': $(this).find('.comment'),
        'cover': $(this).find('.pic_txt').find('img').attr('src')
      };
      resData.push(item);
    });

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

    let postData = [];
    body = iconv.decode(body, 'GBK');
    const $ = cheerio.load(body);
    const images = $('#F0').find('.conright').find('.conttxt').find('.pic');
    console.log(images.length);

    images.each(function(){
      var image = $(this).find('img');
      if(image.attr('src9')){
        var item = image.attr('src9');
      } else {
        var item = image.attr('src');
      }
      postData.push(item)
    });

    cb && cb(postData);
  });
};

var router = function (req, res){
  const req_url = url.parse(req.url);
  const pathname = req_url.pathname;
  const query = querystring.parse(req_url.query);

  console.log('request:: ' + pathname + '    query:: ');

  switch (pathname){
    case '/list':
      fetchListData(query.num, (data) => {
        console.log('================ write list data ================');
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.write(JSON.stringify(data));
        res.end()
      });
      break;

    case '/detail':
      fetchDetailData(query.link, (data) => {
        console.log('================ write detail data ================');
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
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