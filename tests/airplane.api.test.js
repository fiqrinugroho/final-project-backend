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

describe("API Create Airplane", () => {
  it("Success Create New Airplane", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";
    const airplane = {
      airplaneName: "Boeing 737-800",
      airplaneCode: "1212",
      companyName: "LION AIR",
    };
    const response = await request(app)
      .post("/api/airplane/create")
      .set("Authorization", "Bearer " + token)
      .send(airplane);
    expect(response.statusCode).toBe(201);
  });

  it("Invalid Token", async () => {
    const token = "";
    const airplane = {
      airplaneName: "Boeing 737-800",
      airplaneCode: "1212",
      companyName: "LION AIR",
    };
    const response = await request(app).post("/api/airplane/create").set("Authorization", 'Bearer ' + token).send(airplane);
    expect(response.statusCode).toBe(401);
  });

  it("Unauthorized Access", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IlppZGFuZSIsImVtYWlsIjoidml0b0BiaW5hci5jby5pZCIsInJvbGVJZCI6MiwiaWF0IjoxNjcxMTcwMTYxfQ.p21r0Ls6NTsfipPWiJBgfiKOJxVb_FTnzIKCweCAvog";
    const airplane = {
      airplaneName: "Boeing 737-800",
      airplaneCode: "1212",
      companyName: "LION AIR",
    };
    const response = await request(app)
      .post("/api/airplane/create")
      .set("Authorization", "Bearer " + token)
      .send(airplane);
    expect(response.statusCode).toBe(403);
  });
});

describe("API Get Airplane Data By Id", () => {
  it("Success", async () => {
    const response = await request(app).get("/api/airplane/2");
    expect(response.statusCode).toBe(200);
  });
});

describe("API Update Airplane Data By Id", () => {
  it("Success", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";
    const airplane = {
      airplaneName: "Boeing 737-808",
      airplaneCode: "1212",
      companyName: "LION AIR",
    };
    const response = await request(app)
      .put("/api/airplane/update/2")
      .set("Authorization", 'Bearer ' + token)
      .send(airplane);
    expect(response.statusCode).toBe(200);
  });

  it("Invalid Token", async () => {
    const token = "";
    const airplane = {
      airplaneName: "Boeing 737-800",
      airplaneCode: "1212",
      companyName: "LION AIR",
    };
    const response = await request(app)
      .put("/api/airplane/update/2")
      .set("Authorization", 'Bearer ' + token)
      .send(airplane);
    expect(response.statusCode).toBe(401);
  });

  it("Unauthorized Access", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IlppZGFuZSIsImVtYWlsIjoidml0b0BiaW5hci5jby5pZCIsInJvbGVJZCI6MiwiaWF0IjoxNjcxMTcwMTYxfQ.p21r0Ls6NTsfipPWiJBgfiKOJxVb_FTnzIKCweCAvog";
    const airplane = {
      airplaneName: "Boeing 737-808",
      airplaneCode: "1212",
      companyName: "LION AIR",
    };
    const response = await request(app)
      .put("/api/airplane/update/2")
      .set("Authorization", 'Bearer ' + token)
      .send(airplane);
    expect(response.statusCode).toBe(403);
  });
});

describe("API Delete Airplane", () => {
   it("Invalid Token", async () => {
     const token = "";
     const response = await request(app)
       .delete("/api/airplane/delete/2")
       .set("Authorization", "Bearer " + token);
     expect(response.statusCode).toBe(401);
   });

  it("Unauthorized Access", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ2aXRvQG1haWwuY29tIiwicm9sZUlkIjoyLCJpYXQiOjE2Njk2NjM2MDB9.t-mS8RHauM7M5fiIGbXRDaJg7pVE2O82HwfTyY7Z98E";
    const response = await request(app).delete("/api/airplane/delete/2").set("Authorization", 'Bearer ' + token);
    expect(response.statusCode).toBe(403);
  });

  it("Unauthorized Access", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ2aXRvQG1haWwuY29tIiwicm9sZUlkIjoyLCJpYXQiOjE2Njk2NjM2MDB9.t-mS8RHauM7M5fiIGbXRDaJg7pVE2O82HwfTyY7Z98E";
    const response = await request(app)
      .delete("/api/airplane/delete/2")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(403);
  });
});