const request = require("supertest");
const app = require("../app/index");
const dotenv = require("dotenv");
dotenv.config();


describe("API Get All Airport", () => {
  it("success", async () => {
    const response = await request(app).get("/api/airport/");
    expect(response.statusCode).toBe(200);
  });
});

describe("API create airport", () => {
  const token = "sdasokasdaspaskdpakkjdslkg";
  it("Unauthorized", async () => {
    const airport = {
      airportName: "soekarno hatta",
      city: "tangerang",
      cityCode: "CGK",
    };
    const response = await request(app).post("/api/airport/create").set("Authorization", `Bearer ${token}`).send(airport);
    expect(response.statusCode).toBe(401);
  });

  it("Success Create New Airport", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcxMjY5MTM4fQ.PGRaVhoJP2k4knL0-b5D4qmtQlVdV39V5WefVsn2dO0";
    const airport = {
      airportName: "soekarno hatta",
      city: "tangerang",
      cityCode: "CGK",
    };
    const response = await request(app).post("/api/airport/create").set("Authorization", `Bearer ${token}`).send(airport);
    expect(response.statusCode).toBe(400);
  });
});