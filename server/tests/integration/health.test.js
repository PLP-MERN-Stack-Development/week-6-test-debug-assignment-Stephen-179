import request from "supertest";
import express from "express";

// Setup a minimal Express app for testing
const app = express();
app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running 🚀" });
});

describe("GET /api/health", () => {
  it("should return server status", async () => {
    const response = await request(app).get("/api/health");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: "Server is running 🚀" });
  });
});
