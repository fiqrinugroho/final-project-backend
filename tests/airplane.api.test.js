const request = require("supertest");
const app = require("../app/index");
const dotenv = require("dotenv");
dotenv.config();

describe("API Get All Airplane", () => {
  it("success", async () => {
    const response = await request(app).get("/api/airplane/");
    expect(response.statusCode).toBe(200);
  });
});