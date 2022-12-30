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

describe("API Get Transaction Data By User and Status", () => {
  it("Success", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ2aXRvQG1haWwuY29tIiwicm9sZUlkIjoyLCJpYXQiOjE2Njk2NjM2MDB9.t-mS8RHauM7M5fiIGbXRDaJg7pVE2O82HwfTyY7Z98E";
    const status = "success";
    const response = await request(app)
      .get(`/api/transaction/filter?status=${status}`)
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(200);
  });

  it("Invalid Token", async () => {
    const token = "";
    const status = "success";
    const response = await request(app)
      .get(`/api/transaction/filter?status=${status}`)
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(401);
  });

  it("Not Found", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ2aXRvQG1haWwuY29tIiwicm9sZUlkIjoyLCJpYXQiOjE2Njk2NjM2MDB9.t-mS8RHauM7M5fiIGbXRDaJg7pVE2O82HwfTyY7Z98E";
    const status = "invalid";
    const response = await request(app)
      .get(`/api/transaction/filter?status=${status}`)
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(404);
  });
});

describe("API Get Transaction Data By User and Type Trip", () => {
  it("success", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ2aXRvQG1haWwuY29tIiwicm9sZUlkIjoyLCJpYXQiOjE2Njk2NjM2MDB9.t-mS8RHauM7M5fiIGbXRDaJg7pVE2O82HwfTyY7Z98E";
    const tripId = 2;
    const response = await request(app)
      .get(`/api/transaction/trip?tripId=${tripId}`)
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(200);
  });

//   it("Invalid Token", async () => {
//     const token = "";
//     const status = "success";
//     const response = await request(app)
//       .get(`/api/transaction/filter?status=${status}`)
//       .set("Authorization", "Bearer " + token);
//     expect(response.statusCode).toBe(401);
//   });

//   it("Not Found", async () => {
//     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ2aXRvQG1haWwuY29tIiwicm9sZUlkIjoyLCJpYXQiOjE2Njk2NjM2MDB9.t-mS8RHauM7M5fiIGbXRDaJg7pVE2O82HwfTyY7Z98E";
//     const status = "invalid";
//     const response = await request(app)
//       .get(`/api/transaction/filter?status=${status}`)
//       .set("Authorization", "Bearer " + token);
//     expect(response.statusCode).toBe(404);
//   });
});

describe("API Update transaction data by Id", () => {
  it("Success Update Transaction", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ2aXRvQG1haWwuY29tIiwicm9sZUlkIjoyLCJpYXQiOjE2Njk2NjM2MDB9.t-mS8RHauM7M5fiIGbXRDaJg7pVE2O82HwfTyY7Z98E";
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
      .put("/api/transaction/update/1")
      .set("Authorization", "Bearer " + token)
      .send(transaction);
    expect(response.statusCode).toBe(200);
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
      .put("/api/transaction/update/1")
      .set("Authorization", "Bearer " + token)
      .send(transaction);
    expect(response.statusCode).toBe(401);
  });

  it("Not Found", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ2aXRvQG1haWwuY29tIiwicm9sZUlkIjoyLCJpYXQiOjE2Njk2NjM2MDB9.t-mS8RHauM7M5fiIGbXRDaJg7pVE2O82HwfTyY7Z98E";
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
      .put("/api/transaction/update/1000")
      .set("Authorization", "Bearer " + token)
      .send(transaction);
    expect(response.statusCode).toBe(404);
  });
});

describe("API cancel transaction data by Id", () => {
  it("Success Cancel Transaction", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ2aXRvQG1haWwuY29tIiwicm9sZUlkIjoyLCJpYXQiOjE2Njk2NjM2MDB9.t-mS8RHauM7M5fiIGbXRDaJg7pVE2O82HwfTyY7Z98E";
    const response = await request(app)
      .put("/api/transaction/cancel/1")
      .set("Authorization", "Bearer " + token)
    expect(response.statusCode).toBe(200);
  });

  it("Invalid Token", async () => {
    const token = "";
    const response = await request(app)
      .put("/api/transaction/cancel/1")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(401);
  });
});