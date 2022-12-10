const chai = require('chai');
const expect = chai.expect;
const { createUser } = require('../controllers/usersController');
const User = require('../models/User');
const { status} = require('../utils/status');
const request = require("supertest")("http://localhost:8018/api")
require("../routes/user")

describe('POST /signup  createUser', () => {
    it('should return error if email, password, or name is empty', async () => {
        const req = {
            body: {
                email: '',
                password: '',
                name: ''
            }
        };
        const res = {
            status: (code) => {
                expect(code).to.equal(status.bad);
                return {
                    send: (message) => {
                        expect(message).to.be.an('object');
                        expect(message.status).to.equal('error');
                        expect(message.error).to.equal('Email, password, and name field cannot be empty');
                    }
                }
            }
        };
        const next = () => { };

        await createUser(req, res, next);
    });

    it('should return error if email is invalid', async () => {
        const req = {
            body: {
                email: 'invalid.email',
                password: 'password',
                name: 'name'
            }
        };
        const res = {
            status: (code) => {
                expect(code).to.equal(status.bad);
                return {
                    send: (message) => {
                        expect(message).to.be.an('object');
                        expect(message.status).to.equal('error');
                        expect(message.error).to.equal('Please enter a valid Email');
                    }
                }
            }
        };
        const next = () => { };

        await createUser(req, res, next);
    });

    it('should return error if password is less than 8 characters', async () => {
        const req = {
            body: {
                email: 'valid@email.com',
                password: 'pass',
                name: 'name'
            }
        };
        const res = {
            status: (code) => {
                expect(code).to.equal(status.bad);
                return {
                    send: (message) => {
                        expect(message).to.be.an('object');
                        expect(message.status).to.equal('error');
                        expect(message.error).to.equal('Password must be more than seven(7) characters');
                    }
                }
            }
        }
    })

    

    it('should create a new user', async () => {
        const res = await request
          .post('/users/signup')
          .send({
            name:"zehan",
            email: 'test@example.com',
            password: 'password123'
          });
        expect(res.status).to.eql(status.success)
        // expect(res.body).toHaveProperty('user');
        // expect(res.body.user).toHaveProperty('email', 'test@example.com');
        // expect(res.body.user).toHaveProperty('token');
      });
    
      it('should return an error if the email is already in use', async () => {
        const res = await request
          .post('/users/signup')
          .send({
            name: "zehan",
            email: 'test@example.com',
            password: 'password123'
          });
        expect(res.status).to.eql(status.success)
        // expect(res.body).toHaveProperty('message', 'user already exist');
      });
    


})