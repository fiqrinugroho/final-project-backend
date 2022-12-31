const request = require("supertest");
const app = require("../app/index");
const dotenv = require("dotenv");
dotenv.config();

describe("API Get All Payment Method ", () => {
    it("success", async () => {
      const response = await request(app).get("/api/payment/");
      expect(response.statusCode).toBe(200);
    });
});

describe("API Payment By Id Transaction ", () => {
    it("Success", async () => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZpcXJpIiwiZW1haWwiOiJmaXFyaUBtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNjcwMzMyOTU3fQ.wXPmJ2TXeprs3wcw_8u4RONLiUm_KG9zcboaAibyooo";
      const payment = {
            transactionId: 1,
            paymentId: 1
      };
      const response = await request(app)
        .put("/api/payment/")
        .set("Authorization", 'Bearer ' + token)
        .send(payment);
      expect(response.statusCode).toBe(200);
    });
  
    it("Invalid Token", async () => {
      const token = "";
      const payment = {
        transactionId: 1,
        paymentId: 1
  };
      const response = await request(app)
        .put("/api/payment/")
        .set("Authorization", 'Bearer ' + token)
        .send(payment);
      expect(response.statusCode).toBe(401);
    });
  
    it("Transaction Id not Found", async () => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IlppZGFuZSIsImVtYWlsIjoidml0b0BiaW5hci5jby5pZCIsInJvbGVJZCI6MiwiaWF0IjoxNjcxMTcwMTYxfQ.p21r0Ls6NTsfipPWiJBgfiKOJxVb_FTnzIKCweCAvog";
      const payment = {
        transactionId: 1000,
        paymentId: 1000
  };
      const response = await request(app)
        .put("/api/payment/")
        .set("Authorization", 'Bearer ' + token)
        .send(payment);
      expect(response.statusCode).toBe(404);
    });
  });