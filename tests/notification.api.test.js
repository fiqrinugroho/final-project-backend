const request = require("supertest");
const app = require("../app/index");
const dotenv = require("dotenv");
dotenv.config();

describe("API Create Notification By Token", () => {
  it("success", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";

    const notif = "Test Notification";
    const response = await request(app)
      .post("/api/notification/")
      .set("Authorization", "Bearer " + token)
      .send(notif);
    expect(response.statusCode).toBe(201);
  });

  it("Invalid Token", async () => {
    const token = "";
    const response = await request(app)
      .get("/api/notification/")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(401);
  });
});

describe("API Get All Notification By Token", () => {
  it("success", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";
    const response = await request(app)
      .get("/api/notification/")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(200);
  });

  it("Invalid Token", async () => {
    const token = "";
    const response = await request(app)
      .get("/api/notification/")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(401);
  });
});

describe("API Get Notification By Token And Id", () => {
  it("success", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";

    const response = await request(app)
      .get("/api/notification/4")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(200);
  });

  it("Invalid Token", async () => {
    const token = "";
    const response = await request(app)
      .get("/api/notification/1")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(401);
  });

  it("Not Found", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";

    const response = await request(app)
      .get("/api/notification/10000")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(404);
  });
});

describe("API Delete Notification By Id", () => {
  it("success", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";

    const response = await request(app)
      .delete("/api/notification/delete/3")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(200);
  });

  it("Not Found", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";

    const response = await request(app)
      .get("/api/notification/delete/10000")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(404);
  });
});
