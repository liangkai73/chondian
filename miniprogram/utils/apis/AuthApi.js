import Api from '../Api.js';

const AuthApi = AuthApi || {};

/**
*注册
*/
AuthApi.register = (data,success, fail, complete) =>{
	Api.executeBody('/wx/register',data,success,fail,complete);
}

/**
*发送验证码
*/
AuthApi.sendcode = (data,success, fail, complete) =>{
	Api.executeFormData('/wx/sendcode',data,success,fail,complete);
}

/**
*获取openid和session_key
*/
AuthApi.getUserOpenid = (data,success, fail, complete) =>{
	Api.executeFormData('/wx/getUserOpenid',data,success,fail,complete);
}

/**
*登录
*/
AuthApi.login = (data,success, fail, complete) =>{
	Api.executeBody('/wx/login',data,success,fail,complete);
}


export default AuthApi;