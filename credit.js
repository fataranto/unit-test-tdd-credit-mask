function maskify(cc) {
        return cc.length > 4 ? cc.replace(/.(?=.{4})/g, "#") : cc;
}

//console.log(maskify("4556364607935616"));

 module.exports = {
    maskify,
}  