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

describe("API Create Ticket", () => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";
  it("Unauthorized", async () => {
    const ticket = {
      code: "T302288",
      departureDate: "2022-12-06",
      departureTime: "11:35:00",
      arrivalDate: "2022-12-06",
      arrivalTime: "11:35:00",
      flightFrom: 1,
      flightTo: 2,
      airplaneId: 1,
      price: 750000,
      capacity: 35,
      seatNumber: "E20",
      class: "EKONOMI",
    };
    const response = await request(app).post("/api/ticket/create").set("Authorization", token).send(ticket);
    expect(response.statusCode).toBe(401);
  });
});

describe("API Get Ticket By Id", () => {
  it("Success", async () => {
    const response = await request(app).get("/api/ticket/2");
    expect(response.statusCode).toBe(200);
  });
});

