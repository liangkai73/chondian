import Api from '../Api.js';

const InvoiceApi = InvoiceApi || {};

/**
*开票订单列表
*/
InvoiceApi.getOrderInvoice = (data, success, fail, complete) => {
  Api.executeBody('/wx/center/getOrderInvoice', data, success, fail, complete);
}

/**
*开票信息
*/
InvoiceApi.getInvoiceVatsinfo = (data, success, fail, complete) => {
  Api.executeBody('/wx/center/getInvoiceVatsinfo', data, success, fail, complete);
}

/**
*获取城市地区
*/
InvoiceApi.provinceList = (data, success, fail, complete) => {
  Api.executeBody('/wx/center/provinceList', data, success, fail, complete);
}

/**
*确认开票
*/
InvoiceApi.applyInvoiceRecord = (data, success, fail, complete) => {
  Api.executeBody('/wx/center/applyInvoiceRecord', data, success, fail, complete);
}

export default InvoiceApi;