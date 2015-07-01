/**
 * Created by ningfujun on 15/6/23.
 */
var util = {};

//安全变量
util.safeVar = function(obj,type){
    if(obj == undefined){
        obj = type;
    }
    return obj;
}

//json组合
util.extend = function(){
    var n = arguments.length;
    for(var i = n-1;i>=1;i--) {
        var now = arguments[i];
        var next = arguments[i-1];
        if(now!=next){
            for(var j in now){
                next[j]=now[j];
            }
        }

        arguments[i-1] = next;
    }
};

//取出字符串中英文
util.filter_EN = function(str){
    return str.match(/[a-zA-Z.]/g).join("");
}

//去除左右空格
util.lrtrim = function(str){
    str = str.replace(/(^\u3000*)|(\u3000*$)/g, "");
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
//去除所有空格
util.trim = function(str) {
    str = str.replace(/\u3000+/g,"");
    return str.replace(/\s+/g,"");
}
//去除左空格
util.ltrim = function(str) {
    str = str.replace(/(^\u3000*)/g, "");
    return str.replace(/(^\s*)/g, "");
}
//去除右空格
util.rtrim = function(str) {
    str = str.replace(/(\u3000*$)/g, "");
    return str.replace(/(\s*$)/g, "");
}

module.exports = util;