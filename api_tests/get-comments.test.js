const { spec, request } = require("pactum");

const baseUrlApi = "https://jsonplaceholder.typicode.com";

describe("Comments test suite", () => {
  before(() => {
    request.setDefaultTimeout(15000);
  });

  it("get comments api test", async () => {
    await spec().get(`${baseUrlApi}/comments`).expectStatus(200);
  });
});
