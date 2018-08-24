// 登录请求参数
export function Params_login(account,password) {
    let param = new URLSearchParams();
    param.append("ac", "login");
    param.append("account", account);
    param.append("password", password);
    return param
}