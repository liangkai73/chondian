import {executeFormData,executeBody} from '../ApiV2.js';

/**
 * 检查停车厂站是否存在
 * @param {*} parkingId 
 */
export const checkParkingId =(parkingId) =>{
  return executeFormData("/wx/cxyun/checkParkingId",{qrCode: parkingId}) 
}