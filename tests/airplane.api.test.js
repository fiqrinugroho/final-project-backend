const request = require("supertest");
const app = require("../app/index");
const dotenv = require("dotenv");
dotenv.config();

describe("API Get All Airplane Data", () => {
  it("success", async () => {
    const response = await request(app).get("/api/airplane/");
    expect(response.statusCode).toBe(200);
  });
});

describe("API Get Airplane Data By Id", () => {
  it("Success", async () => {
    const response = await request(app).get("/api/airport/2");
    expect(response.statusCode).toBe(200);
  });
});