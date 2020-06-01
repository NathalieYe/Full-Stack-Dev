const {describe, it} = require('mocha'); // mochajs.org for docs (runner)
const {expect} = require('chai'); // chaijs.com for docs (individual tests)
// const expect = require('chai').expect;

//PROBLEM 1
const {alphabeticalOrder} = require('../PS1.P1');

describe('Problem 1 testing', () => {
    // Set up initial conditions, if there are any
    // Set up individual unit tests
    it('should return aaacccdeefgiiiiiiillloopprrssstuux for input of supercalifragilisticexpialidocious', function () {
        let sortedString = alphabeticalOrder('supercalifragilisticexpialidocious');
        expect(sortedString).to.be.equal('aaacccdeefgiiiiiiillloopprrssstuux');
    });
    it('should return ahppy for input of !ha%ppy 2312*@&', function () {
        let sortedString = alphabeticalOrder('!ha%ppy 2312*@&');
        expect(sortedString).to.be.equal('ahppy');
    });
    it('should return a String type', function () {
        let sortedString = alphabeticalOrder('helloworld');
        expect(sortedString).to.be.a('string');
    });
});

//PROBLEM 2
const {evaluate} = require('../PS1.P2');

describe('Problem 2 evaluate expression function testing', () => {
    // Set up initial conditions, if there are any
    // Set up individual unit tests
    it("should return 16 for evaluate('8*2')('8*2')", function () {
        let result = evaluate('8*2')('8*2');
        expect(result).to.be.equal(16);
    });
    it("should return a function for input of '6/2'", function () {
        let result = evaluate('6/2');
        expect(result).to.be.a('function');
    });
    it("should be return a function for input of '8*10'", function () {
        let result = evaluate('8*10');
        expect(result).to.be.a('function');
    });
});


// PROBLEM 3
const {addStrToFunc, lambda, lambda2} = require('../PS1.P3');

describe('addStrToFunc function testing', () => {
    // Set up initial conditions, if there are any
    // Set up individual unit tests
    it("should have a length of 4 for input of supercalifragilisticexpialidocious and lambda ", function () {
        let result = addStrToFunc('supercalifragilisticexpialidocious', lambda);
        expect(result).to.have.lengthOf(4);
        // expect(result).to.be.equal(['super', 'califragilisti', 'cexpialido' ,'cious']);
    });
    it("should be an array for input of supercalifragilisticexpialidocious and lambda ", function () {
        let result = addStrToFunc('supercalifragilisticexpialidocious', lambda);
        expect(result).to.be.a('array');
    });
    it("should be an object for input of supercalifragilisticexpialidocious and lambda2 ", function () {
        let result = addStrToFunc('supercalifragilisticexpialidocious', lambda2);
        expect(result).to.be.a('object');
    });
});
