const mocha = require('mocha');
const chai = require('chai');
const fareUtils = require('../fareutils');

const expect = chai.expect // expect is a function provided by chai

//describe is used to write a group of tests.
// and then in the function that follows we write the tests 
describe('fareUtils', function() {
    it('expect fare to be 50 for 0km and 0min', () => {
        let fare = fareUtils.calcfare(0,0);
        expect(fare).to.equal(50); // these are pretty self-explanatory snippets.
        // 'it' is used to describe the test
    })

    it('expect the fare to be 100 for 10km and 0min', ()=>{
        let fare = fareUtils.calcfare(10, 0);
        expect(fare).to.equal(100);
    })

    // to run test, run 'npm run test', make sure the test folder is named correctly, meaning it should be only 'test'


})