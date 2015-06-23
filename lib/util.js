/**
 * Created by ningfujun on 15/6/23.
 */
var util = {};

util.safeVar = function(obj,type){
    if(obj == undefined){
        obj = type;
    }
    return obj;
}

module.exports = util;