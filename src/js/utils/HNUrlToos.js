/**
 * url操作工具库
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(function() {
      return (root.HNUrlTools = factory());
    });

  } else if (typeof exports === 'object') {
    module.exports = factory();

  } else {
    root.HNUrlTools = factory();
  }
}(this || global, function() {
  var HNUrlTools = {};

  /**
   *将参数对象拼接到url上
   * @param {string} uri  旧url
   * @param {object} data 参数的对象
   * @returns 新url
   */
  HNUrlTools.dtUriTrans = function(uri, data) {
    if (data == undefined) {
      return uri;
    } else {
      var uriParamArray = [];
      for (var key in data) {
        var a = key+'='+data[key]
        uriParamArray.push(a);
      }
      var uriParam = uriParamArray.join('&');
      var newUri = (uri+'?'+uriParam)||'';
      return newUri;
    }
  };


  /**
   * 获取url中的参数
   * @param {any} url
   * @returns 所有参数的对象
   */
  HNUrlTools.getParams = function(url) {
    if (!url) url = window.location.href;
    var opts = {},
      name, value;
    url = url.split('#')[0];
    var idx = url.indexOf('?'),
      search = idx > -1 ? url.substr(idx + 1) : '',
      arrtmp = search.split('&');
    for (var i = 0; i < arrtmp.length; i++) {
      var paramCount = arrtmp[i].indexOf('=');
      if (paramCount > 0) {
        name = arrtmp[i].substring(0, paramCount);
        value = arrtmp[i].substr(paramCount + 1);
        try {
          if (value.indexOf('+') > -1) {
            value = value.replace(/\+/g, ' ');
          }
          opts[name] = decodeURIComponent(value);
        } catch (exp) {
          console.log('error');
        }
      }
    }
    return opts;
  };

  /**
   * @param {string} url 原url
   * @param {string} param 参数名称
   * @param {any} value 参数值
   * @returns 新url
   */
  HNUrlTools.addParam = function(url, param, value) {
    var re = new RegExp('([&\\?])' + param + '=[^& ]*', 'g');
    url = url.replace(re, function(a, b) {
      return b == '?' ? '?' : ''
    })
    var idx = url.indexOf('?');
    var hashIndex = url.indexOf('#');
    if (hashIndex<0) {
      url = (idx > -1 ? idx + 1 != url.length ? url + '&' :url +  '' : url + '?') + param + '=' + value;
    }
    return url
  };
  return HNUrlTools;

}));
