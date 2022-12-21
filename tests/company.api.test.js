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

describe("API create company", () => {
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

describe("API Get Company By Id", () => {
  it("Success", async () => {
    const response = await request(app).get("/api/company/1");
    expect(response.statusCode).toBe(200);
  });

  it("Failed : company not found", async () => {
    const response = await request(app).get("/api/company/99");
    expect(response.statusCode).toBe(404);
  });
});

describe("API Update Company By Id", () => {
  it("Success", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";
    const company = {
      companyName: `${Date.now()} Air`,
      image: "https://ik.imagekit.io/mfn/IMG-1670478922501_rUSD3C2ff.png",
    };
    const response = await request(app)
      .put("/api/airport/update/4")
      .set("Authorization", "Bearer " + token)
      .send(company);
    expect(response.statusCode).toBe(200);
  });

  it("Invalid Token", async () => {
    const token = "";
    const company = {
      companyName: `${Date.now()} Air`,
      image: "https://ik.imagekit.io/mfn/IMG-1670478922501_rUSD3C2ff.png",
    };
    const response = await request(app)
      .put("/api/airport/update/4")
      .set("Authorization", "Bearer " + token)
      .send(company);
    expect(response.statusCode).toBe(401);
  });

  it("Unauthorized Access", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6ImJhcnUiLCJlbWFpbCI6InZpdG9AbWFpbC5jb20iLCJyb2xlSWQiOjIsImlhdCI6MTY3MDQ5Nzc4N30.oxL0rJLBqEqIk0W9opgS6jVZuuFzQij-GaZqMEcZ0AQ";
    const company = {
      companyName: `${Date.now()} Air`,
      image: "https://ik.imagekit.io/mfn/IMG-1670478922501_rUSD3C2ff.png",
    };
    const response = await request(app)
      .put("/api/airport/update/4")
      .set("Authorization", "Bearer " + token)
      .send(company);
    expect(response.statusCode).toBe(403);
  });

  it("Failed : Company Not Found", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";
    const company = {
      companyName: `${Date.now()} Air`,
      image: "https://ik.imagekit.io/mfn/IMG-1670478922501_rUSD3C2ff.png",
    };
    const response = await request(app)
      .put("/api/airport/update/99")
      .set("Authorization", "Bearer " + token)
      .send(company);
    expect(response.statusCode).toBe(404);
  });
});

describe("API Delete Company", () => {
  it("Unauthorized Access", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ2aXRvQG1haWwuY29tIiwicm9sZUlkIjoyLCJpYXQiOjE2Njk2NjM2MDB9.t-mS8RHauM7M5fiIGbXRDaJg7pVE2O82HwfTyY7Z98E";
    const response = await request(app)
      .delete("/api/company/delete/2 ")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(403);
  });

  it("Failed : Company Not Found", async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";
    const response = await request(app)
      .delete("/api/company/delete/999")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(404);
  });
});