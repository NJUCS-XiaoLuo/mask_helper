// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  //(event.helperid)表示event传入 表示修改helperid对应的表象的helpid
  helpid=event.helperid
  db.collection('userdata').where({
    _openid:helpid
  }).update({
    help_openid:wxContext.OPENID,
    help_state:true,
    changed:true
  })


  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}