// var expect = require('chai').expect;
var request = require('request');
var server = require('../index');
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
chai.use(chaiHttp);

describe('Local', () => {
    it ('Home page local', (done) => {
        request('http://localhost:3030', (err, response, body) => {
            expect(body).to.equal('{"info":"HOME"}');
            done();
        })
    }) 
    it ('Investors page local', (done) => {
        request('http://localhost:3030/investors', (err, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        })
    }) 

    describe('/POST Validation', () => {
        it('it should not POST an investor with address longer than 50 symbols', (done) => {
                done();
        });
    });

})

describe('Remote', () => {
    it ('Home page remote', (done) => {
        request('https://parallelm.herokuapp.com', (err, response, body) => {
            expect(body).to.equal('{"info":"HOME"}');
            done();
        })
    }) 
})



