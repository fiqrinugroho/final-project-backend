const request = require("supertest");
const app = require("../app/index");
const dotenv = require("dotenv");
dotenv.config();

describe("API Get All Company Data", () => {
  it("success", async () => {
    const response = await request(app).get("/api/company/");
    expect(response.statusCode).toBe(200);
  });
});

describe("API create airport", () => {
  it("Success Create New Airport", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";
    const company = {
      companyName: `${Date.now()} Air`,
      image: "https://ik.imagekit.io/mfn/IMG-1670478922501_rUSD3C2ff.png",
    };
    const response = await request(app)
      .post("/api/company/create")
      .set("Authorization", "Bearer " + token)
      .send(company);
    expect(response.statusCode).toBe(201);
  });

  it("Failed : Company Name Cannot Be Empty", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";
    const company = {
      companyName: "",
      image: "",
    };
    const response = await request(app)
      .post("/api/company/create")
      .set("Authorization", "Bearer " + token)
      .send(company);
    expect(response.statusCode).toBe(400);
  });

  it("Invalid Token", async () => {
    const token = "";
    const company = {
      companyName: `${Date.now()} Air`,
      image: "https://ik.imagekit.io/mfn/IMG-1670478922501_rUSD3C2ff.png",
    };
    const response = await request(app)
      .post("/api/company/create")
      .set("Authorization", "Bearer " + token)
      .send(company);
    expect(response.statusCode).toBe(401);
  });

  it("Unauthorized Access", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6ImJhcnUiLCJlbWFpbCI6InZpdG9AbWFpbC5jb20iLCJyb2xlSWQiOjIsImlhdCI6MTY3MDU3MDAyNn0.E3Az0mujjVVO12oErhHqYoZxKVs9ErK4XSr5S1pWHXE";
    const company = {
      companyName: `${Date.now()} Air`,
      image: "https://ik.imagekit.io/mfn/IMG-1670478922501_rUSD3C2ff.png",
    };
    const response = await request(app)
      .post("/api/company/create")
      .set("Authorization", "Bearer " + token)
      .send(company);
    expect(response.statusCode).toBe(403);
  });
});