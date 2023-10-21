const expect    = require("chai").expect
const request = require('supertest')
let app = require('../server').app
let server = require('../server').server

describe('GET /', function() {

    after(function (done) {
        server.close()
        done()
    })

    it('Get home route', (done) => {
        request(app)
            .get('/')
            .expect(200, done)
        })
})