import Api from '../Api.js'; 

const StationListApi = StationListApi || {};

/**
*获取地图站点
*/
StationListApi.sationList = (data,success, fail, complete) =>{
	Api.executeBody('/wx/wxchargestation/getChargeStion',data,success,fail,complete);
} 
/**
*获取站点详情
*/
// StationListApi.sationInfo = (data, success, fail, complete) => {
//   Api.executeFormData('/wx/wxchargestation/getChargeStionInfo', data, success, fail, complete);
// }

StationListApi.sationListDetail = (data, success, fail, complete) => {
  Api.executeBody('/wx/pilesation/sationlistdetail', data, success, fail, complete);
}

StationListApi.getChargepileInfo = (data, success, fail, complete) => {
  Api.executeFormData('/wx/wxchargestation/getChargepileInfo', data, success, fail, complete);
} 
// 启动充电桩
StationListApi.startcharge = (data,success,fail,complete) =>{
  Api.executeFormData('/wx/wxchargestation/startcharge',data,success,fail,complete)
} 
// 停止充电桩
StationListApi.stopcharge = (data,success,fail,complete) =>{
  Api.executeFormData('/wx/wxchargestation/stopcharge',data,success,fail,complete)
} 
//查看实时数据
StationListApi.getRealData = (data,success,fail,complete)  =>{
  Api.executeFormData('/wx/wxchargestation/getRealData',data,success,fail,complete)
}
//查看实时数据
StationListApi.getCarRealData = (data,success,fail,complete)  =>{
  Api.executeFormData('/wx/wxchargestation/getCarRealData',data,success,fail,complete)
}

//单车查看是否启动
StationListApi.getBikeOrdering = (data,success,fail,complete)  =>{
  Api.executeFormData('/wx/wxchargestation/getBikeOrdering',data,success,fail,complete)
}

//查看是否启动
StationListApi.getCarOrdering = (data,success,fail,complete)  =>{
  Api.executeFormData('/wx/wxchargestation/getCarOrdering',data,success,fail,complete)
}

//获取充电站信息
StationListApi.getChargeStionInfo = (data,success,fail,complete)  =>{
  Api.executeFormData('/wx/wxchargestation/getChargeStionInfo',data,success,fail,complete)
}
 

//获取活动公告
StationListApi.getAnnouncement = (data,success,fail,complete)  =>{
  Api.executeBody('/wx/wxchargestation/getAnnouncement',data,success,fail,complete)
}

//根据运营商获取站点
StationListApi.getStationByOgranId = (data,success,fail,complete)  =>{
  Api.executeFormData('/wx/wxchargestation/getStationByOgranId',data,success,fail,complete)
}

 //获取用户可选择的电站
StationListApi.getStationByMemberAndPos =(data,success,fail,complete) =>{ 
  Api.executeFormData("/wx/wxchargestation/getStationByMemberAndPos",data,success,fail,complete)
}

 //获取汽车站点详情
 StationListApi.carStationDetailV2 =(data,success,fail,complete) =>{ 
  Api.executeFormData("/wx/wxchargestation/carStationDetailV2",data,success,fail,complete)
}
 //获取汽车充电桩-枪详情
 StationListApi.getCarPileInfoV2 =(data,success,fail,complete) =>{ 
  Api.executeFormData("/wx/wxchargestation/getCarPileInfoV2",data,success,fail,complete)
}
//返回站点基础信息，包月充值的地方用
StationListApi.getStationByIdAndType =(data,success,fail,complete) =>{ 
  Api.executeFormData("/wx/wxchargestation/getStationByIdAndType",data,success,fail,complete)
}
export default StationListApi;