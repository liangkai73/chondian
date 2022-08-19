import Api from '../Api.js';
import {executeFormData} from '../ApiV2.js';

const MyCenterApi = MyCenterApi || {};

/**
*个人中心首页数据
*/
MyCenterApi.index = (data,success, fail, complete) =>{ 
  Api.executeFormData('/wx/center/wxIndex',data,success,fail,complete);
} 
  
/**
*充值记录
*/
MyCenterApi.rechargerRecord = (data, success, fail, complete) => {
  Api.executeBody('/wx/center/wxRechargeOrder', data, success, fail, complete);
} 
/**
*充值余额
*/
MyCenterApi.wxRecharge = (data, success, fail, complete) => {
  if(data.rechargeType === null){
    data.rechargeType = 0;
  }
  Api.executeBody('/wx/center/wxRecharge', data, success, fail, complete);
}

/**
*获取支付结果
*/
MyCenterApi.wxPayResult = (data, success, fail, complete) => {
  Api.executeFormData('/wx/center/wxPayResult', data, success, fail, complete);
}

/**
*首页扫二维码得到终端详情
*/
MyCenterApi.chargepileInfo = (data, success, fail, complete) => {
  Api.executeFormData('/wx/pilesation/chargepileInfo', data, success, fail, complete);
}

/**
*返回订单记录
*/
MyCenterApi.orderRecord = (data, success, fail, complete) => {
  Api.executeBody('/wx/center/wxMyOrder', data, success, fail, complete);
}

/**
*充电接口
*/
MyCenterApi.charge = (data, success, fail, complete) => {
  Api.executeBody('/wx/center/charge', data, success, fail, complete);
}

/**
*停止充电接口
*/
MyCenterApi.stopCharge = (data, success, fail, complete) => {
  Api.executeBody('/wx/center/stopCharge', data, success, fail, complete);
}

/**
*充电订单的详情接口
*/
MyCenterApi.orderInfo = (data, success, fail, complete) => {
  Api.executeFormData('/wx/center/getWxMyOrderInfo', data, success, fail, complete);
}

/**
*停止充电后的订单结果
*/
MyCenterApi.orderResult = (data, success, fail, complete) => {
  Api.executeFormData('/wx/center/orderResult', data, success, fail, complete);
}

/**
*充电详情实时数据接口
*/
MyCenterApi.getRealTime = (data, success, fail, complete) => {
  Api.executeBody('/wx/center/getRealTime', data, success, fail, complete);
}


/**
*获取充电中详情参数
*/
MyCenterApi.wxChargingOrder = (data, success, fail, complete) => {
  Api.executeFormData('/wx/center/wxChargingOrder', data, success, fail, complete);
}


/**
*获取账户列表数据
*/
MyCenterApi.accountList = (data, success, fail, complete) => {
  Api.executeFormData('/wx/center/accountList', data, success, fail, complete);
}

/**
*修改默认账户接口
*/
MyCenterApi.updateAccount = (data, success, fail, complete) => {
  Api.executeFormData('/wx/center/updateAccount', data, success, fail, complete);
}

 
/**
*个人充值卡列表    
*/
MyCenterApi.cardList = (data, success, fail, complete) => {
  Api.executeBody('/wx/center/wxMyCard', data, success, fail, complete);
}
 
/**
 * 添加卡片
 */
MyCenterApi.wxAddMyCard = (data, success, fail, complete) => {
  Api.executeFormData('/wx/center/wxAddMyCard', data, success, fail, complete);
}
/**
 * 解绑卡片
 */
MyCenterApi.wxUnbindMyCard = (data, success, fail, complete) => {
  Api.executeFormData('/wx/center/wxUnbindMyCard', data, success, fail, complete);
}


/**
 * 余额退款
 */
MyCenterApi.wxRefund = (data, success, fail, complete) => {
  Api.executeBody('/wx/center/wxRefund', data, success, fail, complete);
} 
 /**
 * 查看订单结果
 */
MyCenterApi.wxOrderResult = (data, success, fail, complete) =>{
  Api.executeFormData('/wx/center/wxOrderResult', data, success, fail, complete);
}


/**
 * 查看订单结果
 */
MyCenterApi.wxCarOrderResult = (data, success, fail, complete) =>{
  Api.executeFormData('/wx/center/wxCarOrderResult', data, success, fail, complete);
}

/**
 * 充值列表接口
 */
MyCenterApi.getRechargeData = (data, success, fail, complete) =>{
  Api.executeFormData('/wx/center/getRechargeData', data, success, fail, complete);
}

/**
 * 查询充值金额是否有优惠活动
 */
MyCenterApi.getRechargeDataInfo = (data, success, fail, complete) =>{
  Api.executeBody('/wx/center/getRechargeDataInfo', data, success, fail, complete);
}
  
/**
 * 查询充值金额是否有优惠活动
 */
MyCenterApi.getArgmtByType = (data, success, fail, complete) =>{
  Api.executeFormData('/wx/center/getArgmtByType', data, success, fail, complete);
}
 
/**
 * 查询充值金额是否有优惠活动
 */
MyCenterApi.getUser = (data, success, fail, complete) =>{
  Api.executeFormData('/wx/center/getUser', data, success, fail, complete);
}


/**
*充电订单的详情接口
*/
MyCenterApi.carOrderInfo = (data, success, fail, complete) => {
  Api.executeFormData('/wx/center/getCarWxMyOrderInfo', data, success, fail, complete);
}
/**
*获取当前用户是否关注公众号
*/
MyCenterApi.getMemberSubscribe = (data, success, fail, complete) => {
  Api.executeFormData('/wx/center/getMemberSubscribe', data, success, fail, complete);
}

/**
*获取当前用户是否关注公众号
*/
MyCenterApi.saveVehicle = (data, success, fail, complete) => {
  Api.executeBody('/wx/center/saveVehicle', data, success, fail, complete);
}
/**
 * 删除车牌
 * @param {*} id 
 */
MyCenterApi.deleteVehicleById =  (id ) =>{
  return executeFormData('/wx/center/deleteVehicleById',{id: id}) 
} 
/**
 * 查询订单信息
 * @param {*} vehicleNo 
 * @param {*} parkingId 
 */
MyCenterApi.getOrderByVehicle =(vehicleNo,parkingId)=>{
  return executeFormData('/wx/cxyun/getCxyunOrderByVehicle',{vehicleNo: vehicleNo,parkingId:parkingId}) 
}

/**
*获取当前用户是否关注公众号
*/
MyCenterApi.queryVehicleList = (data, success, fail, complete) => {
  Api.executeFormData('/wx/center/queryVehicleList', data, success, fail, complete);
}

MyCenterApi.changeDefaultVehicle = (data, success, fail, complete) => {
  Api.executeFormData('/wx/center/changeDefaultVehicle', data, success, fail, complete);
}
/**
 * 获取字典值列表
 * @param {*}} data 
 * @param {*} success 
 * @param {*} fail 
 * @param {*} complete 
 */
MyCenterApi.getDictDetailByItemKey = (data,success,fail,complete) =>{
  Api.executeFormData('/wx/center/getDictDetailByItemKey', data, success, fail, complete);
}
/**
 * 文件上传
 * @param {*} success 
 * @param {*} fail 
 * @param {*} complete 
 */
MyCenterApi.uploadFile = (path ,success,fail,complete) =>{
  Api.uploadFile("/wx/fileupload/upload",path ,success,fail,complete);
}
/**
 * 根据url 删除文件
 * @param {*} url 
 * @param {*} success 
 * @param {*} fail 
 * @param {*} complete 
 */
MyCenterApi.deleteByUrl = (url,success,fail,complete) =>{
  Api.executeFormData("/wx/fileupload/deleteByUrl",url ,success,fail,complete);
}
/**
 * 添加反馈
 * @param {*} data 
 * @param {*} success 
 * @param {*} fail 
 * @param {*} complete 
 */
MyCenterApi.addFeedback = (data,success,fail,complete) =>{
  Api.executeBody("/wx/center/addFeedback",data ,success,fail,complete);
}
/**
 * 反馈列表
 * @param {*} data 
 * @param {*} success 
 * @param {*} fail 
 * @param {*} complete 
 */
MyCenterApi.feedbackList = (data,success,fail,complete) =>{
  Api.executeFormData("/wx/center/feedList",data ,success,fail,complete);
}
/**
 * 获取包月活动
 * @param {*} data 
 * @param {*} success 
 * @param {*} fail 
 * @param {*} complete 
 */
MyCenterApi.queryMonthlyActivitis = (data,success,fail,complete)=>{
  Api.executeBody("/wx/center/queryMonthlyActivitis",data ,success,fail,complete);
}
/**
 * 支付包月
 * @param {*} data 
 * @param {*} success 
 * @param {*} fail 
 * @param {*} complete 
 */
MyCenterApi.payMonthlyOrder = (data ,success,fail,complete) => {
  Api.executeBody("/wx/center/payMonthlyOrder",data ,success,fail,complete);
}
/**
 * 支付结果查询
 * @param {*} data 
 * @param {*} success 
 * @param {*} fail 
 * @param {*} complete 
 */
MyCenterApi.wxMonthlyOrderResult = (data ,success,fail,complete) => {
  Api.executeFormData("/wx/center/wxMonthlyOrderResult",data ,success,fail,complete);
}

MyCenterApi.queryMonthlyOrderList = (data ,success,fail,complete) => {
  Api.executeBody("/wx/center/queryMonthlyOrderList",data ,success,fail,complete);
}

MyCenterApi.getAdvByPageCode = (data ,success,fail,complete) =>{
  Api.executeFormData("/wx/center/getAdvByPageCode",data ,success,fail,complete);
};
export default MyCenterApi;