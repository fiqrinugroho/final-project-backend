const request = require("supertest");
const app = require("../app/index");
const dotenv = require("dotenv");
dotenv.config();
// npx jest -t API Admin Get All Transaction By Id --setupFiles dotenv/config --coverage --forceExit --detectOpenHandles
describe("API Admin Get All Transaction", () => {
  it("success", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";
    const response = await request(app)
      .get("/api/transaction/admin")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(200);
  });
  it("Invalid Token", async () => {
    const response = await request(app).get("/api/transaction/admin");
    expect(response.statusCode).toBe(401);
  });

  it("Unauthorized Access", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IlppZGFuZSIsImVtYWlsIjoidml0b0BtYWlsLmNvbSIsInJvbGVJZCI6MiwiaWF0IjoxNjcyMjM3MDQyfQ.JMFKw-2pICloDGLsZhom3FL5gKjcwVdNtCxkj7TDhJw";
    const response = await request(app)
      .get("/api/transaction/admin")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(403);
  });
});

describe("API Admin Get All Transaction By Id", () => {
  it("success", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";
    const response = await request(app)
      .get("/api/transaction/admin/1")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(200);
  });
  
  it("Invalid Token", async () => {
    const response = await request(app).get("/api/transaction/admin/1");
    expect(response.statusCode).toBe(401);
  });

  it("Unauthorized Access", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IlppZGFuZSIsImVtYWlsIjoidml0b0BtYWlsLmNvbSIsInJvbGVJZCI6MiwiaWF0IjoxNjcyMjM3MDQyfQ.JMFKw-2pICloDGLsZhom3FL5gKjcwVdNtCxkj7TDhJw";
    const response = await request(app)
      .get("/api/transaction/admin/1")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(403);
  });

  it("Not Found", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";
    const response = await request(app)
      .get("/api/transaction/admin/1000")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(404);
  });
});

describe("API Admin Filter Transaction By Status", () => {
  it("success", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";
    const status = "success";
    const response = await request(app)
      .get(`/api/transaction/admin/filter?status=${status}`)
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(200);
  });

  it("Invalid Token", async () => {
    const status = "success";
    const response = await request(app).get(
      `/api/transaction/admin/filter?status=${status}`
    );
    expect(response.statusCode).toBe(401);
  });

  it("Unauthorized Access", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IlppZGFuZSIsImVtYWlsIjoidml0b0BtYWlsLmNvbSIsInJvbGVJZCI6MiwiaWF0IjoxNjcyMjM3MDQyfQ.JMFKw-2pICloDGLsZhom3FL5gKjcwVdNtCxkj7TDhJw";
    const status = "success";
    const response = await request(app)
      .get(`/api/transaction/admin/filter?status=${status}`)
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(403);
  });

  it("Not Found", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";
    const status = "invalid";
    const response = await request(app)
      .get(`/api/transaction/admin/filter?status=${status}`)
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(404);
  });
});

describe("API Admin trip Transaction By TripId", () => {
  it("success", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";
    const tripId = 2;
    const response = await request(app)
      .get(`/api/transaction/admin/trip?tripId=${tripId}`)
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(200);
  });

  it("Invalid Token", async () => {
    const tripId = "1";
    const response = await request(app).get(
      `/api/transaction/admin/trip?tripId=${tripId}`
    );
    expect(response.statusCode).toBe(401);
  });

  it("Unauthorized Access", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IlppZGFuZSIsImVtYWlsIjoidml0b0BtYWlsLmNvbSIsInJvbGVJZCI6MiwiaWF0IjoxNjcyMjM3MDQyfQ.JMFKw-2pICloDGLsZhom3FL5gKjcwVdNtCxkj7TDhJw";
    const tripId = "1";
    const response = await request(app)
      .get(`/api/transaction/admin/trip?tripId=${tripId}`)
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(403);
  });

  it("Not Found", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";
    const tripId = "1";
    const response = await request(app)
      .get(`/api/transaction/admin/trip?tripId=${tripId}`)
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(404);
  });
});

describe("API Admin Update Transaction By Id", () => {
  it("success", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";
      const response = await request(app)
      .put("/api/transaction/admin/update/1")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(200);
  });

  it("Invalid Token", async () => {
    const response = await request(app).put("/api/transaction/admin/update/1")
    expect(response.statusCode).toBe(401);
  });

  it("Unauthorized Access", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IlppZGFuZSIsImVtYWlsIjoidml0b0BtYWlsLmNvbSIsInJvbGVJZCI6MiwiaWF0IjoxNjcyMjM3MDQyfQ.JMFKw-2pICloDGLsZhom3FL5gKjcwVdNtCxkj7TDhJw";
    const response = await request(app)
      .put("/api/transaction/admin/update/1")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(403);
  });

  it("Not Found", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";
    const response = await request(app)
      .put("/api/transaction/admin/update/1000")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(404);
  });
});

describe("API Admin Delete Transaction By Id", () => {
  it("Invalid Token", async () => {
    const response = await request(app).delete("/api/transaction/admin/delete/1")
    expect(response.statusCode).toBe(401);
  });

  it("Unauthorized Access", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IlppZGFuZSIsImVtYWlsIjoidml0b0BtYWlsLmNvbSIsInJvbGVJZCI6MiwiaWF0IjoxNjcyMjM3MDQyfQ.JMFKw-2pICloDGLsZhom3FL5gKjcwVdNtCxkj7TDhJw";
    const response = await request(app)
      .delete("/api/transaction/admin/delete/1")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(403);
  });

  it("Not Found", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";
    const response = await request(app)
      .delete("/api/transaction/admin/delete/1000")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(404);
  });
});
