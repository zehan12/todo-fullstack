const chai = require('chai');
const expect = chai.expect;
const { createUser } = require('../controllers/usersController');
const User = require('../models/User');
const { status} = require('../utils/status');

describe('createUser', () => {
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

    


})