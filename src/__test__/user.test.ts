import request from "supertest";
import app from "../app";

describe("GET /api/users", () => {
  it("should return all users", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("status", "success");
    expect(res.body).toHaveProperty("message", "Get all users");
    expect(res.body).toHaveProperty("data", []);
  });
});

describe("GET /api/user/:id", () => {
  it("should return a user by ID", async () => {
    const userId = "123";
    const res = await request(app).get(`/api/user/`).query({ id: userId });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("status", "success");
    expect(res.body).toHaveProperty("message", `Get user with ID: ${userId}`);
    expect(res.body).toHaveProperty("data", {});
  });

  it("should return 400 if no ID is provided", async () => {
    const res = await request(app).get("/api/user/");
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("status", "error");
    expect(res.body).toHaveProperty("message", "User ID is required");
  });
});
