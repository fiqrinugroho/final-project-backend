const request = require("supertest");
const app = require("../app/index");
const dotenv = require("dotenv");
dotenv.config();

describe("API Login", () => {
  it("Success login", async () => {
    const user = {
      email: "fiqri@mail.com",
      password: "qwerty123",
    };
    const response = await request(app).post("/api/auth/login").send(user);
    expect(response.statusCode).toBe(200);
  });
  
  it("Failed login : wrong password", async () => {
    const failedUser = {
      email: "fiqri@mail.com",
      password: "1234",
    };
    const response = await request(app).post("/api/auth/login").send(failedUser);
    expect(response.statusCode).toBe(400);
  });
  
  it("Failed login : email not registered", async () => {
    const failedUser = {
      email: "joker@binar.co.id",
      password: "1234656",
    };
    const response = await request(app).post("/api/auth/login").send(failedUser);
    expect(response.statusCode).toBe(404);
  });
});

describe("API Register", () => {
    it("Success register", async () => {
      const newUser = {
        firstName: "Zidane",
        lastName: "Arvito",
        email: `vito${Date.now()}@binar.co.id`,
        password: "12345678",
      }
      const response = await request(app).post("/api/auth/register").send(newUser)
      expect(response.statusCode).toBe(201)
    })
  
    it("Failed register : email already taken", async () => {
      const failedNewUser = {
        firstName: "Fiqri",
        lastName: "Nugroho",
        email: "fiqri@mail.com",
        password:"123456789",
      }
      const response = await request(app)
        .post("/api/auth/register")
        .send(failedNewUser)
      expect(response.statusCode).toBe(400)
    })
  })