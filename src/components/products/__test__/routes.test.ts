import request from "supertest";
import app from "../../../app";
// const request = require("supertest");
// const app = require("../app");

describe("Test product route", () => {
  test("It should respond with status code 201", (done) => {
    request(app)
      .post("/api/products", {
        //@ts-ignore
        name: "Acer",
        photoUrl: "https://dell.com",
        price: 650000,
        tags: ["PC", "computer"],
      })
      .then((response) => {
        expect(response.statusCode).toBe(201);
        done();
      });
  });
  test("It should respond with status code of 200", (done) => {
    request(app)
      .get("/api/products")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
