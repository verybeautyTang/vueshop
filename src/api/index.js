import ajax from './ajax'

// [1、根据经纬度获取位置详情](#1 根据经纬度获取位置详情)<br/>
export const reqAdress = (geohash) => ajax(`/position/${geohash}`);
// [2、获取食品分类列表](#2 获取食品分类列表)<br/>
export const reqFoodType = () => ajax('/index_category')
// [3、根据经纬度获取商铺列表](#3 根据经纬度获取商铺列表)<br/>
export const reqShops = (longitude, latitude) => ajax('/shops', {
    longitude,
    latitude
})
// [4、根据经纬度和关键字搜索商铺列表](#4 根据经纬度和关键字搜索商铺列表)<br/>
export const reqAll = (geohash, keyword) => ajax('/search_shops', {
    geohash,
    keyword
})
// [5、获取一次性验证码](#5 获取一次性验证码)<br/>
export const reqNumber = () => ajax('/captcha')
// [6、用户名密码登陆](#6 用户名密码登陆)<br/>
export const reqPwd = () => ajax('/login_pwd')
// [7、发送短信验证码](#7 发送短信验证码)<br/>
export const reqMes = () => ajax('/sendcode')
// [8、手机号验证码登陆](#8 手机号验证码登陆)<br/>
export const reqloginSms = () => ajax('./login_sms')
// [9、根据会话获取用户信息](#9 根据会话获取用户信息)<br/>
export const reqUsr = () => ajax('/userinfo')
// [10、用户登出](#10 用户登出)<br/>
export const reqLogOut = () => ajax('/logout')