
var hostmain = "https://wxapp02.buji.net.cn"; //正式
var host = hostmain + "/api/wxopen",data_host= hostmain + "/api/data" ;
var config = {
    hostmain,
    host,
    imgUrl: hostmain,
    loginUrl: host+'/Onlogin',
    userInformationUrl: host +'/UserInfo',
    checkSessionIdUrl: host + '/CheckSessionId',
    getTop: data_host+'/indextop',
    getIndexUrl:data_host+'/indexlist',
    getBannerUrl: data_host + '/banner',
    getBannerDetailUrl: data_host + '/bannerdetail',
    getShopDetailUrl: data_host + '/storedetail',
    setUserAttentionUrl: data_host + '/setuserattention',
    getArea: data_host + '/storearea',
    getStoreListByArea: data_host + '/storelistbyarea',
    searchUrl: data_host + '/searchlist',
    getFavorUrl: data_host + '/getuserattention',
    getNumber: host + '/DecryptPhoneNumber',
    settingsUrl: data_host + '/uinfosetting',
    getVideoList: data_host + '/topicdetail',
    getVideoDetail: data_host + '/mediadetail',
    sendFormid: data_host + '/postuserformid',
    activityList: data_host + '/activitylist',
    activityDetail:data_host + '/activitydetail',
    signup: data_host + '/setuseractivity'
};

module.exports = config
