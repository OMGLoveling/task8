"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("测试描述", function(){
    sinon.spy(console, 'log');

    it("95713", function(){

        let str = "95713"
        let result = main(str);

        expect(result).to.equal("||:|:::|:|:|:::|:::||::||::|:|:|");
    });
    it("957131111", function(){

        let str = "957131111"
        let result = main(str);

        expect(result).to.equal("||:|:::|:|:|:::|:::||::||::::||:::||:::||:::||:::|||");
    });
    it("95713-1111", function(){

        let str = "957131111"
        let result = main(str);

        expect(result).to.equal("||:|:::|:|:|:::|:::||::||::::||:::||:::||:::||:::|||");
    });
    it("95713的条形码||:|:::|:|:|:::|:::||::||::|:|:|", function(){

        let str = "||:|:::|:|:|:::|:::||::||::|:|:|"
        let result = main(str);

        expect(result).to.equal("95713");
    });
    it("957131111的条形码||:|:::|:|:|:::|:::||::||::::||:::||:::||:::||:::|||", function(){

        let str = "||:|:::|:|:|:::|:::||::||::::||:::||:::||:::||:::|||"
        let result = main(str);

        expect(result).to.equal("95713-1111");
    });

});