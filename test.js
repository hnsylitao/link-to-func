var replace = require('./build/index')

var absPath = 'https://url.com';

var newsList = replace.absPath(absPath, '/home/news/list');
var newsDetail1 = replace.absPath(absPath, '/home/news/detail/:id');
var newsDetail2 = replace.absPath(absPath, '/home/news(/:id)');

//basic
console.log(newsList()); // /home/news/list
console.log(newsDetail1(1));// /home/news/detail/1
console.log(newsDetail2());// /home/news
console.log(newsDetail2(1));// /home/news/1

//toAbsPath
console.log(newsList.toAbsPath());// https://url.com/home/news/list
console.log(newsDetail1.toAbsPath(1));// https://url.com/home/news/detail/1
console.log(newsDetail2.toAbsPath());// https://url.com/home/news
console.log(newsDetail2.toAbsPath(1));// https://url.com/home/news/1

//getLink
console.log(newsList.getLink());// /home/news/list
console.log(newsDetail1.getLink());// /home/news/detail/:id
console.log(newsDetail2.getLink());// /home/news(/:id)