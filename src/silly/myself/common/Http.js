import {Decrypt, Encrypt} from "./Des";

const axios = require('axios');

export function Http_Post(param, successCall, errorCall) {
    // 取出参数，组合
    let iterator = param.entries();
    let data = "";
    for (let kv of iterator) {
        data += kv[0] + "=" + kv[1] + ",";
    }
    // 去除最后的逗号
    data = data.substring(0, data.length - 1);
    // 密匙加密
    let encrypt = Encrypt(data, global.constants.key);
    // 时间加密
    let timestamp = (new Date()).valueOf();
    encrypt = Encrypt(encrypt, timestamp);
    // 组合新的参数
    let params = new URLSearchParams();
    params.append("signs", encrypt);
    params.append("timestamps", timestamp);
    return axios.post(global.constants.SERVICE_URL, params)
        .then(function (response) {
            successCall(JSON.parse(Decrypt(response.data, global.constants.key)))
        }).catch(function (error) {
            errorCall(error)
        })
}

export function Http_Get() {
    return axios.get(global.constants.SERVICE_URL)
}