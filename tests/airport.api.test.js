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
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";
  it("Unauthorized", async () => {
    const airport = {
      airportName: "Halim Perdanakusuma",
      city: "Jakarta",
      cityCode: "JKT",
    };
    const response = await request(app).post("/api/airport/create").set("Authorization", token).send(airport);
    expect(response.statusCode).toBe(401);
  });
});

describe("API Get Airport By Id", () => {
  it("Success", async () => {
    const response = await request(app).get("/api/airport/2");
    expect(response.statusCode).toBe(200);
  });
});

describe("API Update Airport By Id", () => {
  it("Unauthorized", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ2aXRvQG1haWwuY29tIiwicm9sZUlkIjoyLCJpYXQiOjE2Njk2NjM2MDB9.t-mS8RHauM7M5fiIGbXRDaJg7pVE2O82HwfTyY7Z98E";
    const airport = {
      airportName: "soekarno hatta",
      city: "tangerang",
      cityCode: "CGK",
    };
    const response = await request(app).put("/api/airport/update/2").set("Authorization", token).send(airport);
    expect(response.statusCode).toBe(401);
  });
});

describe("API Delete Airport", () => {
  it("Unauthorized", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ2aXRvQG1haWwuY29tIiwicm9sZUlkIjoyLCJpYXQiOjE2Njk2NjM2MDB9.t-mS8RHauM7M5fiIGbXRDaJg7pVE2O82HwfTyY7Z98E";
    const response = await request(app).delete("/api/airport/delete/2").set("Authorization", token);
    expect(response.statusCode).toBe(401);
  });
});