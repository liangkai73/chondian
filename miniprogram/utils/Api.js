const Api = Api || {};
// import oemConfig from  '../utils/oemConfig';
const oemConfig = {
  oemCode: "xiaolan"
}

// Api.host = "http://localhost:8082"; //本机
Api.host = "https://wx.chargeland.cn"; //正式 
//  Api.host = "http://wxtest.chargeland.cn";  //测试

/**
 * http 总入口 , 全局拦截
 */
Api.execute = (url, data, contentType, success, fail, complete) => {
  success = success || function (res) {
    // console.log(url, res);
  }
  fail = fail || function (err) {

  }
  complete = complete || function (res) {

  }
  wx.request({
    url: Api.host + url,
    header: {
      'content-type': contentType,
      'wxtoken': wx.getStorageSync("token"),
      "oemCode": oemConfig.oemCode
    },
    data: data,
    method: "POST",
    success: function (res) {
      // console.log("每个方法都要来", url);
      //拦截token 信息
      if (!validateCode(res)) {
        return;
      }
      success(res);
    },
    fail: fail,
    complete: complete
  })
}
/**
 *form post 提交 走拦截
 */
Api.executeFormData = (url, data, success, fail, complete) => {
  Api.execute(url, data, 'application/x-www-form-urlencoded', success, fail, complete);
}

/**
 *request body 提交 走拦截
 */
Api.executeBody = (url, data, success, fail, complete) => {
  Api.execute(url, JSON.stringify(data), 'application/json', success, fail, complete);
}
/**
 * 文件上传封装
 * @param {*} url 
 * @param {*} path 
 * @param {*} success 
 * @param {*} fail 
 * @param {*} complete 
 */
Api.uploadFile = (url, path, success, fail, complete) => {
  success = success || function (res) {

  }
  fail = fail || function (err) {
    // console.log(err);
  }
  complete = complete || function (res) {
    // console.log(res);
  }
  wx.uploadFile({
    url: Api.host + url,
    filePath: path,
    name: "file",
    header: {
      "content-type": "multipart/form-data",
      'wxtoken': wx.getStorageSync("token"),
      "oemCode": oemConfig.oemCode
    },
    success: (res) => {
      if (!validateCode(res)) {
        return;
      }
      success(res);
    },
    fail: fail,
    complete: complete
  })
}


/**
 * 拦截和处理特殊代码
 */
function validateCode(res) {
  if (res.data.code == 416) { //token已经过期!
    console.log("token已经过期!", res);
    wx.removeStorageSync("token");
    wx.showToast({
      title: '会话超时,重新获取用户信息',
      duration: 2000,
      icon: 'node',
      success: function () {
        wx.reLaunch({
          url: '/pages/auth/authLogin/authLogin',
        })
      }
    })
    return false;
  }
  if (res.data.code == 405) { //这是一个无效的token!
    console.log("这是一个无效的token!", res);
    wx.removeStorageSync("token");
    wx.showToast({
      title: '这是一个无效的token!',
      icon: 'node',
      duration: 2000,
      success: function () {
        wx.reLaunch({
          url: '/pages/auth/authLogin/authLogin',
        })
      }
    })
    return false;
  }

  return true;
}


/**
 * 获取地址栏参数
 * @param 参数名称
 * @url 地址栏
 */
Api.getQueryString = (name, url) => {
  if (url && url.indexOf('?') == -1) return null
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
  let startIndex = url.indexOf('?') + 1
  var r = url.substr(startIndex).match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}

export default Api;