const supertest = require('supertest');
const request = supertest('http://localhost:3001/');
//const chai = require('chai');

const UserAssertion = require('./test data/data')

module.exports = 
{
  request,
  //chai,
  //expect,
  UserAssertion
};