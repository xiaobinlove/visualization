// define(["@/js/lib/stomp", "uuid"],function(Stomp, UUID) {
import Stomp from '@/js/lib/stomp'
import UUID from '@/js/lib/uuid'

/*
 * 1.装饰器模式持有Stomp客户端的引用
 * 1.new方法的选择，对比使用静态方法对外暴露
 */
function StompClient(url) {
  this.client = _connectWithStomp(url)
}
/*
 * 创建连接对象
 * 兼容老版本用法
 */
StompClient.create = function (url) {
  return new StompClient(url)
}

function _connectWithStomp(url) {
  return Stomp.client(url)
}

/*建立连接*/
StompClient.prototype.connect = function (account, passcode, callbacks, host) {
  //host参数的使用方式
  var onConnected, onFailure
  if (callbacks) {
    /* 供stomp.js中做判断：args[1] instanceof Function */
    onConnected = callbacks.onConnected ? callbacks.onConnected : new Function()
    onFailure = callbacks.onFailure ? callbacks.onFailure : new Function()
  } else {
    onConnected = new Function()
    onFailure = new Function()
  }

  var headers = { login: account, passcode: passcode, host: host, uuid: UUID }
  this.client.connect(headers, onConnected, onFailure)
}

/*获取连接状态*/
StompClient.prototype.connected = function () {
  return this.client.connected
}

/*主题订阅*/
StompClient.prototype.subscribe = function (topic, callback, headers) {
  headers = headers ? headers : {}
  headers.id = topic
  this.client.subscribe(topic, callback, headers)
}

/*发布主题信息*/
StompClient.prototype.publish = function (topic, text, headers) {
  this.client.send(topic, null, text)
}

/*取消主题订阅*/
StompClient.prototype.unsubscribe = function (topic) {
  this.client.unsubscribe(topic)
}

/*断开连接*/
StompClient.prototype.disconnect = function (callback, headers) {
  this.client.disconnect(callback, headers)
}

export { StompClient }

// return StompClient;
// })
