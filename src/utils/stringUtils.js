/**
 * 手机号判断
 * @param tel
 * @return
 */
export function isPhoneNumber(tel) {
  var reg =/^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
  return reg.test(tel);
}


//判断字符串的长度

// export function getByteLength(str){
//   var count = 0;
//   for(var i = 0;i < str.length;i ++){
//     if(str.charCodeAt(i) > 255){//charCodeAt返回参数Unicode编码
//       count +=2;//中文为2Byte
//     }else{
//       count ++;//其他为1Byte
//     }
//   }
//   return count;//返回参数字节长度值,也可以直接console输出
// }

export function getByteLength(str){
  var count = str.length;                   //首先count等于字符串的长度
  for(var i = 0;i < str.length;i ++){
    if(str.charCodeAt(i) > 255){            //如果Unicode编码大于255为中文
      count ++;                             //在原来基础上没多一个中文就+1
    }
  }
  return count;                             //返回参数字节长度值,也可以直接console输出
}


//字符串的长度为 6-8 位
export function isByteLength(str) {
  var count = getByteLength(str);

  if(6 >= count <= 8){
    return count;
  }
}


//加载框
