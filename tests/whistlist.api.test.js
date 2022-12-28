const request = require("supertest");
const app = require("../app/index");
const dotenv = require("dotenv");
dotenv.config();

describe("API Get Users Wishlist ", () => {
  it("Success", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IlppZGFuZSIsImVtYWlsIjoidml0b0BiaW5hci5jby5pZCIsInJvbGVJZCI6MiwiaWF0IjoxNjcyMDY0MTMzfQ.OGtiMGTjSAh182abF5NSQxl8A0eccP81iqAX9HNo5Ik";
    const response = await request(app)
      .get("/api/whistlist/")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(200);
  });

  it("Invalid Token", async () => {
    const token = "";
    const response = await request(app)
      .get("/api/whistlist/")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(401);
  });
});

describe("API Add Wishlist", () => {
  it("Success Add New Wishlist", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IlppZGFuZSIsImVtYWlsIjoidml0b0BiaW5hci5jby5pZCIsInJvbGVJZCI6MiwiaWF0IjoxNjcyMDY0MTMzfQ.OGtiMGTjSAh182abF5NSQxl8A0eccP81iqAX9HNo5Ik";
    const wishlist = {
        ticketId: "1"
    }
    const response = await request(app)
      .post("/api/whistlist/create")
      .set("Authorization", "Bearer " + token)
      .send(wishlist);
    expect(response.statusCode).toBe(201);
  });

  it("Invalid Token", async () => {
    const token = "";
    const wishlist = {
      ticketId: "1",
    };
    const response = await request(app)
      .post("/api/whistlist/create")
      .set("Authorization", "Bearer " + token)
      .send(wishlist);
    expect(response.statusCode).toBe(201);
  });
});

describe("API Delete Airplane", () => {
  it("Invalid Token", async () => {
    const token = "";
    const response = await request(app)
      .delete("/api/whistlist/delete/1")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(401);
  });
});
