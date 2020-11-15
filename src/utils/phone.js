
/**
 * 手机号判断
 * @param tel
 * @return
 */

// export function isPhone(tel) {
//   var regix = /^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
//
//   if(tel.test(regix)){
//     return true;
//   }else {
//     return false;
//   }
// }

export function isPhoneNumber(tel) {
  var reg =/^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
  return reg.test(tel);
}

