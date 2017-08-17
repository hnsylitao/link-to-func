var linkToFunc = require('./build/index')
var tape = require('tape')

tape('basic', function (t) {
  var product = linkToFunc('/home/product(/:productId)')
  var productList = linkToFunc('/home/product')
  var productDetail = linkToFunc('/home/product/:id')

  t.equal(product(), '/home/product')
  t.equal(product(10000), '/home/product/10000')
  t.equal(productList(), '/home/product')
  t.equal(productDetail(10000), '/home/product/10000')
  t.end()
})

tape('getLink', function (t) {
  var product = linkToFunc('/home/product(/:productId)')
  var productList = linkToFunc('/home/product')
  var productDetail = linkToFunc('/home/product/:id')

  t.equal(product.getLink(), '/home/product(/:productId)')
  t.equal(productList.getLink(), '/home/product')
  t.equal(productDetail.getLink(), '/home/product/:id')
  t.end()
})

tape('toString', function (t) {
  var product = linkToFunc('/home/product(/:productId)')
  var productList = linkToFunc('/home/product')
  var productDetail = linkToFunc('/home/product/:id')

  t.equal(product.toString(), '/home/product')
  t.equal(product.toString(10000), '/home/product/10000')
  t.equal(productList.toString(), '/home/product')
  t.equal(productDetail.toString(10000), '/home/product/10000')
  t.end()
})

tape('absPath', function (t) {
  var url = 'http://url.com';
  var product = linkToFunc.absPath(url, '/home/product(/:productId)')
  var productList = linkToFunc.absPath(url, '/home/product')
  var productDetail = linkToFunc.absPath(url, '/home/product/:id')

  t.equal(product.toAbsPath(), 'http://url.com/home/product')
  t.equal(product.toAbsPath(10000), 'http://url.com/home/product/10000')
  t.equal(productList.toAbsPath(), 'http://url.com/home/product')
  t.equal(productDetail.toAbsPath(10000), 'http://url.com/home/product/10000')
  t.end()
})