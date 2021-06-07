const app = require("./index");
const request = require("supertest");

it('Sanity Check', () => {
  expect(1).toBe(1)
})

describe("GET / ", () => {
  test("It should respond with error message on no request", async () => {
    const response = await request(app).get("/");
    expect(response.body).toEqual("Sorry - we broke something.");
    expect(response.statusCode).toBe(200);
  });
});

describe("GET comics ", () => {
  test("It should respond with all seeded comics", async () => {
    const response = await request(app).get("/api/all");
    expect(response.body).toHaveLength(2423);
    expect(response.statusCode).toBe(200);
  });
});

describe("GET individual comic ", () => {
  test("It should respond with one comics", async () => {
    const response = await request(app).get("/api/comic/1");
    expect(response.body).toHaveLength(1);
    expect(response.statusCode).toBe(200);
  });
});