const app = require('../app');
const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http'); // has a dependency on mocha
const {expect} = chai;
const {describe, it} = mocha;

chai.use(chaiHttp);

describe('NYT Books API', function() {
    this.timeout(15000); //if I don't put this line in, the test will timeout, but this.timeout doesn't work with arrow function, which is why I have ES5 style function
    it('should return code 200 success code', function (done) {
        chai.request(app)
            .get('/current')
            .end((err, response) => {
                expect(response).to.have.status(200);
                done();
            })
    });
    it('should not return code 500 server error', function (done) {
        chai.request(app)
            .get('/current')
            .end((err, response) => {
                expect(response).to.not.have.status(500);
                done();
            })
    });
    it('should return an object', function (done) {
        chai.request(app)
            .get('/current')
            .end((err, response) => {
                expect(response).to.be.a('Object');
                done();
            })
    });
})