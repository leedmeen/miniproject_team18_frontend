export const pwdReg = (pwd) => {
    let reg_pwd = /^[A-za-z0-9]{8,15}/g;

    return reg_pwd.test(pwd);
}