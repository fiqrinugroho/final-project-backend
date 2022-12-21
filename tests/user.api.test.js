const request = require("supertest");
const app = require("../app/index");
const dotenv = require("dotenv");
dotenv.config();

describe("API Get User", () => {
  it("Success", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ2aXRvQG1haWwuY29tIiwicm9sZUlkIjoyLCJpYXQiOjE2Njk2NjM2MDB9.t-mS8RHauM7M5fiIGbXRDaJg7pVE2O82HwfTyY7Z98E";
    const response = await request(app)
      .get("/api/user/")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(200);
  });

  it("Invalid Token", async () => {
    const token = "";
    const response = await request(app)
      .get("/api/user/")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(401);
  });
});

describe("API Update User", () => {
  it("Success", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ2aXRvQG1haWwuY29tIiwicm9sZUlkIjoyLCJpYXQiOjE2Njk2NjMzMTR9.CtkS22YXgl5zPR0SItR629YoC4hOp9RHnk3sFFnv9Yg";
    const user = {
      firstName: "Upin",
      lastName: "Arvito",
      address: "Jakarta",
      phoneNumber: "08123456789012",
      avatar: "",
      gender: "male",
    };
    const response = await request(app)
      .put("/api/user/update/")
      .set("Authorization", "Bearer " + token)
      .send(user);
    expect(response.statusCode).toBe(200);
  });

  it("Invalid Token", async () => {
    const token = "";
    const user = {
      firstName: "Upin",
      lastName: "Arvito",
      address: "Jakarta",
      phoneNumber: "08123456789012",
      avatar: "",
      gender: "male",
    };
    const response = await request(app)
      .put("/api/user/update/")
      .set("Authorization", "Bearer " + token)
      .send(user);
    expect(response.statusCode).toBe(401);
  });
});