[![Build Status](https://travis-ci.org/hnsylitao/link-to-func.svg?branch=master)](https://travis-ci.org/hnsylitao/link-to-func)
[![codecov](https://codecov.io/gh/hnsylitao/link-to-func/branch/master/graph/badge.svg)](https://codecov.io/gh/hnsylitao/link-to-func)
[![Version](https://img.shields.io/npm/v/link-to-func.svg?style=flat)](https://www.npmjs.com/package/link-to-func)
[![NPM](https://img.shields.io/npm/dt/link-to-func.svg?style=flat)](https://www.npmjs.com/package/link-to-func)
[![LICENSE](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://github.com/hnsylitao/link-to-func/blob/master/LICENSE)

# link-to-func 

router link to function [demo](https://codepen.io/hnsylitao/pen/qXPvVN)

```
npm install link-to-func
```

## Usage

### commonjs
``` js
var LinkToFunc = require('link-to-func')

var absPath = 'https://url.com';

var newsList = LinkToFunc.absPath(absPath, '/home/news/list');
var newsDetail1 = LinkToFunc.absPath(absPath, '/home/news/detail/:id');
var newsDetail2 = LinkToFunc.absPath(absPath, '/home/news(/:id)');

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

```

### browser
``` html
<script src="https://unpkg.com/link-to-func/build/index.min.js" type="text/javascript" />
<script type=""text/javascript">
  var absPath = 'https://url.com';

  var newsList = linkToFunc.absPath(absPath, '/home/news/list');
  var newsDetail1 = linkToFunc.absPath(absPath, '/home/news/detail/:id');
  var newsDetail2 = linkToFunc.absPath(absPath, '/home/news(/:id)');

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
</script>

```
