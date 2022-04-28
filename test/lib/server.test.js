const request = require('supertest');
const {app, handler} = require("../../lib/server");

describe('Server test suite', () => {
    test(' / gives welcome message', async () => {
        const response = await request(app).get("/");
        expect(response.body.message).toEqual("FizzBuzz Api welcome!");
        expect(response.statusCode).toBe(200);
        expect.assertions(2);
        handler();
    });
    test('/v1/explorers/node returns 10 explorers', async () => {
        const response = await request(app).get("/v1/explorers/node");
        expect(response.body.length).toBe(10);
        expect(response.statusCode).toBe(200);
        expect.assertions(2);
        handler();
    });
});