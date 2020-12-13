const { expect } = require("@jest/globals");
const supertest = require("supertest");
const rewire = require("rewire");

const app = rewire("./index");
const request = supertest(app)


describe('/api/create/game', () => {
    test('makes call to create game', () => {
        return request.post("/api/create/game").then(res => {
            expect(res.statusCode).toBe(201);
            expect(res.body.gameId).toBe(0);
        });
    });
});

afterAll(done => {
    app.close();        // Be sure to close the server
    done();
});