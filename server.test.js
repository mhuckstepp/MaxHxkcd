const app = require("./index");
const request = require("supertest");

it("Sanity Check", () => {
  expect(1).toBe(1);
});

describe("server.js", () => {
  it("is the correct testing environment", async () => {
    expect(process.env.NODE_ENV).toBe("testing");
  });
});

describe("responds with empty object on GET / request ", () => {
  test("It should respond with emply object on get request", async () => {
    const response = await request(app).get("/");
    expect(response.body).toEqual({});
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
  test("It should respond with one comic", async () => {
    const response = await request(app).get("/api/comic/1");
    expect(response.body.alt).toContain("Don't we all.");
    expect(response.statusCode).toBe(200);
  });
});


