const request = require("supertest");
const app = require("../app/index");
const dotenv = require("dotenv");
dotenv.config();

describe("API Create New Transaction Data", () => {
  it("Success Create New Transaction", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ2aXRvQG1haWwuY29tIiwicm9sZUlkIjoyLCJpYXQiOjE2Njk2NjM2MDB9.t-mS8RHauM7M5fiIGbXRDaJg7pVE2O82HwfTyY7Z98E";
    const transaction = {
        ticketGo: 1,
        ticketBack: 2,
        tripId: 2,
        firstName: "udin",
        lastName: "gambut",
        NIK: "32151314230402",
        brithDate: "2022-1-21"
    }
    const response = await request(app)
      .post("/api/transaction/add")
      .set("Authorization", "Bearer " + token)
      .send(transaction);
    expect(response.statusCode).toBe(201);
  });
  
    it("Invalid Token", async () => {
      const token = "";
      const transaction = {
        ticketGo: 1,
        ticketBack: 2,
        tripId: 2,
        firstName: "udin",
        lastName: "gambut",
        NIK: "32151314230402",
        brithDate: "2022-1-21",
      };
      const response = await request(app)
        .post("/api/transaction/add")
        .set("Authorization", "Bearer " + token)
        .send(transaction);
      expect(response.statusCode).toBe(401);
    });
});

describe("API Get Transaction Data By Token", () => {
  it("Success", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ2aXRvQG1haWwuY29tIiwicm9sZUlkIjoyLCJpYXQiOjE2Njk2NjM2MDB9.t-mS8RHauM7M5fiIGbXRDaJg7pVE2O82HwfTyY7Z98E";
    const response = await request(app)
      .get("/api/transaction/")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(200);
  });

  it("Invalid Token", async () => {
    const token = "";
    const response = await request(app)
      .get("/api/transaction/")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(401);
  });
});

describe("API Get Transaction Data By Id", () => {
   it("Success", async () => {
     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ2aXRvQG1haWwuY29tIiwicm9sZUlkIjoyLCJpYXQiOjE2Njk2NjM2MDB9.t-mS8RHauM7M5fiIGbXRDaJg7pVE2O82HwfTyY7Z98E";
     const response = await request(app)
       .get("/api/transaction/1")
       .set("Authorization", "Bearer " + token);
     expect(response.statusCode).toBe(200);
   });

   it("Invalid Token", async () => {
     const token = "";
     const response = await request(app)
       .get("/api/transaction/1")
       .set("Authorization", "Bearer " + token);
     expect(response.statusCode).toBe(401);
   });
});

describe("API Get Transaction Data By Id", () => {
  it("Success", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ2aXRvQG1haWwuY29tIiwicm9sZUlkIjoyLCJpYXQiOjE2Njk2NjM2MDB9.t-mS8RHauM7M5fiIGbXRDaJg7pVE2O82HwfTyY7Z98E";
    const response = await request(app)
      .get("/api/transaction/1")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(200);
  });

  it("Invalid Token", async () => {
    const token = "";
    const response = await request(app)
      .get("/api/transaction/1")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(401);
  });
});

