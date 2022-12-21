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
  it("Success Create New Ticket", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";
    const ticket = {
      code: `T${Date.now}`,
      departureDate: "2022-12-06",
      departureTime: "11:35:00",
      arrivalDate: "2022-12-06",
      arrivalTime: "11:35:00",
      flightFrom: 1,
      flightTo: 3,
      airplaneId: 1,
      price: 750000,
      capacity: 35,
      seatNumber: "E21",
      class: "EKONOMI",
    };
    const response = await request(app)
      .post("/api/ticket/create")
      .set("Authorization", "Bearer " + token)
      .send(ticket);
    expect(response.statusCode).toBe(201);
  });

  it("Failed : ticket with this code already exists", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";
    const ticket = {
      code: "T302222",
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
    const response = await request(app)
      .post("/api/ticket/create")
      .set("Authorization", "Bearer " + token)
      .send(ticket);
    expect(response.statusCode).toBe(400);
  });

  it("Invalid Token", async () => {
    const token = "";
    const ticket = {
      code: "T302287",
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
    const response = await request(app)
      .post("/api/ticket/create")
      .set("Authorization", 'Bearer ' + token)
      .send(ticket);
    expect(response.statusCode).toBe(401);
  });

  it("Unauthorized Access", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6ImJhcnUiLCJlbWFpbCI6InZpdG9AbWFpbC5jb20iLCJyb2xlSWQiOjIsImlhdCI6MTY3MDQ5Nzc4N30.oxL0rJLBqEqIk0W9opgS6jVZuuFzQij-GaZqMEcZ0AQ";
    const ticket = {
      code: "T302287",
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
    const response = await request(app)
      .post("/api/ticket/create")
      .set("Authorization", "Bearer " + token)
      .send(ticket);
    expect(response.statusCode).toBe(403);
  });
});

describe("API Get Ticket By Id", () => {
  it("Success", async () => {
    const response = await request(app).get("/api/ticket/2");
    expect(response.statusCode).toBe(200);
  });
});
