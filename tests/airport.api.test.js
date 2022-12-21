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
  it("Success Create New Airport", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";
    const airport = {
      airportName: "Halim Perdanakusuma",
      city: "Jakarta",
      cityCode: "JKT",
    };
    const response = await request(app)
      .post("/api/airport/create")
      .set("Authorization", 'Bearer ' + token)
      .send(airport);
    expect(response.statusCode).toBe(201);
  });

  it("Failed : airport name cannot be empty", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";
    const airport = {
      airportName: "",
      city: "",
      cityCode: "",
    };
    const response = await request(app)
      .post("/api/airport/create")
      .set("Authorization", "Bearer " + token)
      .send(airport);
    expect(response.statusCode).toBe(400);
  });

  it("Failed : Need token for access", async () => {
    const token = "";
    const airport = {
      airportName: "Halim Perdanakusuma",
      city: "Jakarta",
      cityCode: "JKT",
    };
    const response = await request(app)
      .post("/api/airport/create")
      .set("Authorization", "Bearer " + token)
      .send(airport);
    expect(response.statusCode).toBe(401);
  });

  it("Unauthorized Access", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6ImJhcnUiLCJlbWFpbCI6InZpdG9AbWFpbC5jb20iLCJyb2xlSWQiOjIsImlhdCI6MTY3MDU3MDAyNn0.E3Az0mujjVVO12oErhHqYoZxKVs9ErK4XSr5S1pWHXE";
    const airport = {
      airportName: "Halim Perdanakusuma",
      city: "Jakarta",
      cityCode: "JKT",
    };
    const response = await request(app)
      .post("/api/airport/create")
      .set("Authorization", "Bearer " + token)
      .send(airport);
    expect(response.statusCode).toBe(403);
  });
});

describe("API Get Airport By Id", () => {
  it("Success", async () => {
    const response = await request(app).get("/api/airport/2");
    expect(response.statusCode).toBe(200);
  });
  
  it("Failed : airport not found", async () => {
    const response = await request(app).get("/api/airport/99");
    expect(response.statusCode).toBe(404);
  });
});

describe("API Update Airport By Id", () => {
  it("Success", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";
    const airport = {
      airportName: "soekarno hatta",
      city: "tangerang",
      cityCode: "CGK",
    };
    const response = await request(app)
      .put("/api/airport/update/2")
      .set("Authorization", 'Bearer ' + token)
      .send(airport);
    expect(response.statusCode).toBe(200);
  });
  
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