import request from "supertest";
import app from "../../../app";
//import { connect, disconnect } from "../../../utils/db";
// const request = require("supertest");
// const app = require("../app");

jest.setTimeout(30000000);

describe("Test product route", () => {
  // beforeAll(() => connect());
  // afterAll(() => disconnect());
  // test("It should respond with status code 201", () => {
  //   return request(app)
  //     .post("/api/products", {
  //       //@ts-ignore
  //       name: "Acer",
  //       photoUrl: "https://dell.com",
  //       price: 650000,
  //       tags: ["PC", "computer"],
  //     })
  //     .then((response) => {
  //       expect(response.statusCode).toBe(201);
  //     });
  // });
  test("It should respond with status code of 200", async () => {
    const res = await request(app).get("/api/products");
    expect(res.statusCode).toBe(200);
    // return request(app)
    //   .get("/api/products")
    //   .then((response) => {
    //     expect(response.statusCode).toBe(200);
    //   });
  });
});
