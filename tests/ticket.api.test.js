const request = require("supertest");
const app = require("../app/index");
const dotenv = require("dotenv");
dotenv.config();

describe("API Get All Ticket", () => {
  it("success", async () => {
    const response = await request(app).get("/api/ticket/");
    expect(response.statusCode).toBe(200);
  });
});
