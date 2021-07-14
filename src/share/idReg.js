export const idReg = (id) => {
    let reg_id = /^[A-za-z0-9]{5,15}/g;

    return reg_id.test(id);
}